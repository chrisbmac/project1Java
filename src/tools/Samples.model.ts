import FocusView from '../FocusView/FocusView';
// Generated by https://quicktype.io

export interface PhotosData {
    photos: Photo[];
    
}

export interface Photo {
    caption: string;
    comments: Comments[];
    id: string;
    source: string;
    title: string;

}

export interface Comments {
    author: string;
    comment: string;
}

export interface Image {
    source: string;
    title: string;
}

export interface ViewProps {
    photos: Photo[];
    visible: boolean;
    setCount: Function;
}

export interface ImageClicked {
    photoClicked: number;
    
    visible: boolean;
}

export interface Count {
    setCount: Function;
}

export interface SendComments {
    count: number;
    photos: Photo[];
    setPhotos: Function;
    comments: Comments[];
    getJSONData: Function;
    visible: boolean;
    
}