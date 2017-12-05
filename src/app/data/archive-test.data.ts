import {Archive} from '../models/archive.model';
import { BlogTestData } from './blog-test.data';

export class ArchiveTestData {
    private _data: BlogTestData;
    private _archives: Array<Archive> = [
        new Archive('1', 12, 2017, this.data.blogs(12, 2017)),
        new Archive('1', 1, 2018, this.data.blogs(1, 2018)),
        new Archive('1', 2, 2018, this.data.blogs(2, 2018))
    ];

	public get data(): BlogTestData {
		return this._data;
	}
    
}