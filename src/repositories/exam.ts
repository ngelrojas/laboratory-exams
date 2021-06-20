import {getRepository} from 'typeorm';
import {Exam, Laboratory} from '../models';
import {TypeExam} from '../models/exam';

export interface IExam {
    name: string;
    tipo: TypeExam;
    status: boolean;
    laboratory: number;
}

export const getExams = async():Promise<Array<Exam>> => {
    const examRepository = getRepository(Exam);
    return examRepository.find();
};

export const createExam = async(payload: IExam):Promise<Exam | null> => {
    const isActive = await getStatus(payload.laboratory);
    const examRepository = getRepository(Exam);
    const iexam = new Exam();
    if(!isActive || payload.status === false) return null;
    return examRepository.save({
        ...iexam,
        ...payload
    });
};

export const getExam = async(id: number):Promise<Exam | null> => {
    const examRepository = getRepository(Exam);
    const iexam = await examRepository.findOne({id: id});
    if(!iexam) return null;
    return iexam;
};

export const getStatus = async(id: number) => {
    const examRepository = getRepository(Laboratory);
    const respStatus = await examRepository.find({id:id, status:true});
    if(respStatus) return null;
    return respStatus;
}
