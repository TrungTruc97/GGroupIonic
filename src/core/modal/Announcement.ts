import * as moment from 'moment';
export class Announcement{
        id: number ;
        title: string;
        content: string;
        image: string;
        userId: number;
        dateCreated: moment.Moment;
        dateModified: moment.Moment;
        status: boolean;
        recipientId: number;
       // message: string;
}