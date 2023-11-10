
export class Statue implements Artwork{

    statHeight : number;
    constructor(statHeight : number, public title : string, public year : number,public  price : number) {

        this.statHeight = statHeight;
        this.title = title;
        this.year = year;
        this.price = price;
    }

}