import 'mocha'; //testing library
import * as chai from 'chai'; // assertion library
import * as chaiHttp from 'chai-http'; //chai http server
import Application from './app'; //application server
import enums from '@src/configs/enums'; //enums path message consistency

const { expect } = chai;


chai.use(chaiHttp);

const app = new Application().express;


describe('CreateUser', () => {
    it('should create user successfully', (done: any) =>{
        chai.request(app)
        .post('/api/v1/users')
        .send({
            input1: "",
            input2: "",
        })
        .end((err: Error, res: any) => {
            expect(res.body.message).to.eq(enums.RESOURCE_CREATED('user'));
            done();
        });
    });
    it('should return error if the user already exists', (done) => {
        chai.request(app)
        .post('/api/v1/users')
        .send({
            input1: "",
            input2: "",
        })
        .end((err: Error, res: any) => {
            expect(res.body.message).to.eq(enums.RESOURCE_EXISTS('user'));
            done();
        });
    });
});