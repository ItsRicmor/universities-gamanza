import { IUniversity } from 'models/IUniversity';
import { v4 as uuidv4 } from 'uuid';
import { BaseModel } from 'sjs-base-model';


export class UniversityModel extends BaseModel implements IUniversity {
  public readonly id: string = uuidv4();
  public readonly country: string = '';
  public readonly alpha_two_code: string = '';
  public readonly name: string = '';
  public readonly "state-province": string = '';
  public readonly domains: string[] = [];
  public readonly web_pages: string[] = [];

  constructor(data: Partial<UniversityModel>) {
    super();

    this.update(data);
  }
}