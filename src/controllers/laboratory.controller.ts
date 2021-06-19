import {Get, Route, Tags, Post, Body, Path} from 'tsoa';
import {Laboratory} from '../models';
import {
    getLaboratories,
    createLaboratory,
    ILaboratory,
    getLaboratory
} from '../repositories/laboratory';

@Route('laboratories')
@Tags('Laboratory')
export default class LaboratoryController {

    @Get('/')
    public async getLaboratories():Promise<Array<Laboratory>> {
        return getLaboratories();
    }

    @Post('/')
    public async createLaboratory(@Body() body: ILaboratory):Promise<Laboratory> {
        return createLaboratory(body);
    }

    @Get('/:id')
    public async getLaboratory(@Path() id:string):Promise<Laboratory | null> {
        return getLaboratory(Number(id));
    }
}
