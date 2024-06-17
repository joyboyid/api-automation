const supertest = require("supertest");
const baseurl = "https://reqres.in";

describe('Req res teseting', () => {
    it('GET', async() => {
        const response = await supertest(baseurl)
        .get("/api/users/2");
        console.log(response.status);
        console.log(response.body);
    });
    it('POST', async() => {
        const body ={
            "name": "morpheus",
            "job": "leader"
        }
        const response = await supertest(baseurl)
        .post("/api/users")
        .send(body);
        console.log(response.body);
    });
    it('PUT', async() => {
        const body = {
            "name": "morpheus",
            "job": "zion resident"
        }
        const response = await supertest(baseurl).put("/api/users/2").send(body);
        console.log(response.body);

    });
    it('DELETE', async() => {
        const response = await supertest(baseurl).delete("/api/users/6");
        console.log(response.status);
    });
});