import {Get, Route, Tags, Post, Body, Path} from 'tsoa';
import {Exam} from '../models';
import {
    getExams,
    createExam,
    IExam,
    getExam
} from '../repositories/exam';

@Route('exams')
@Tags('Exam')
export default class ExamController {
    @Get('/')
    public async getExams():Promise<Array<Exam>> {
        return getExams();
    }

    @Post('/')
    public async createExam(@Body() body:IExam):Promise<Exam | null> {
        const respExam = createExam(body);
        if(!respExam) return null;
        return respExam;
    }

    @Get('/:id')
    public async getExam(@Path() id:string):Promise<Exam | null> {
        return getExam(Number(id));
    }
}
