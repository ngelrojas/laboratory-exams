import {getRepository} from 'typeorm';
import {Laboratory} from '../models';

export interface ILaboratory {
    name: string;
    address: string;
    status: boolean;
};

export const getLaboratories = async():Promise<Array<Laboratory>> => {
    const laboratoryRepository = getRepository(Laboratory);
    return laboratoryRepository.find();
};

export const createLaboratory = async(payload: ILaboratory):Promise<Laboratory> => {
    const laboratoryRepository = getRepository(Laboratory);
    const laboratory = new Laboratory();
    return laboratoryRepository.save({
        ...laboratory,
        ...payload
    });
};

export const getLaboratory = async(id: number):Promise<Laboratory | null> => {
    const laboratoryRepository = getRepository(Laboratory);
    const laboratory = await laboratoryRepository.findOne({id: id});
    if(!laboratory) return null;
    return laboratory;
};

