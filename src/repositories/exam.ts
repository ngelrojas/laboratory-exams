import {getRepository} from 'typeorm';
import {Exam} from '../models';

export interface IExam {
    name: string;
    tipo: string;
    status: boolean;
    laboratory: number;
}

export const getExams = async():Promise<Array<Exam>> => {
    const examRepository = getRepository(Exam);
    return examRepository.find();
};

export const createExam = async(payload: IExam):Promise<Exam> => {
    const examRepository = getRepository(Exam);
    const exam = new Exam();
    return examRepository.save({
        ...exam,
        ...payload
    });
}
