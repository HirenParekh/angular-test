import { DataObj } from '../models/data.model';
import { dataColors } from '../constants/data-color.constants';

export var mockData:DataObj[] = [
    {id:1,title:'abc',color:dataColors[0],text:'good morning !!'},
    {id:2,title:'def',color:dataColors[1],text:'good afternoon !!'},
    {id:3,title:'ghi',color:dataColors[2],text:'good evening !!'},
    {id:4,title:'jkl',color:dataColors[3],text:'good night !!'},
    {id:5,title:'mno',color:dataColors[4],text:'have a nice day !!'}
]