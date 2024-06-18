import {expect} from 'chai';
const supertest = require("supertest");

const fs = require('fs');
const baseurl = "https://reqres.in";

describe('Req res teseting', () => {
    var createdId;
    it('GET', async() => {
        const schema = JSON.parse(fs.readFileSync("resource/schema/get_single_object_schema.json", "utf-8"));
        const response = await supertest(baseurl)
        .get("/api/users/2");
        // console.log(response.status);
        console.log(response.body);
        expect(response.status).to.equal(200);
        expect(response.body[0].id).to.equal("2");
        expect(response.body[0].first_name).to.equal("Janet");
        expect(response.body[0].last_name).to.equal("Weaver");
        expect(response.body[0].email).to.equal("janet.weaver@reqres.in");    

        expect(response.body).to.be.jsonSchema(schema);
    });
    it('POST', async() => {
        const body ={
            "name": "morpheus",
            "job": "leader"
        }
        const response = await supertest(baseurl)
        .post("/api/users")
        .send(body);
        
    });
    it('PUT', async() => {
        const schema = JSON.parse(fs.readFileSync("resource/schema/put_schema.json", "utf-8"));
        const body = {
            "name": "morpheus",
            "job": "zion resident"
        }
        const response = await supertest(baseurl).put("/api/users/2").send(body);
        console.log(response.body);
        expect(response.body).to.be.jsonSchema(schema);

    });
    it('DELETE', async() => {
        const response = await supertest(baseurl).delete(`/api/users/${createdId}`);
        console.log(response.body);
        expect(response.status).to.equal(200)
        
    });
});