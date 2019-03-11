interface ICageFree { freeLevel: number; }
interface IFreeRange { range: number; }
interface IArtisanal { love: number; }

type Brunch = ICageFree & IFreeRange & IArtisanal;

interface Millenial {
    orderBrunch(): Brunch;
}

// interface Brunch extends ICageFree, IFreeRange, IArtisanal {

// }

const brunch: Brunch = {

}