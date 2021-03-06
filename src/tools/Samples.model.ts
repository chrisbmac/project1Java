import FocusView from '../FocusView/FocusView';
// Generated by https://quicktype.io

// App, Scroll, Comment
export interface PhotosData {
    photos: Photo[];
    
}
// App, focus, Scroll View, Comment
export interface Photo {
    caption: string;
    comments: Comments[];
    id: string;
    source: string;
    title: string;

}
//Scroll, 
export interface Comments {
    author: string;
    comment: string;
}

export interface Image {
    source: string;
    title: string;
}
//Focus,
export interface ViewProps {
    photos: Photo[];
    visible: boolean;
    setCount: Function;
}

export interface ImageClicked {
    photoClicked: number
    visible: boolean;
}

export interface Count {
    setCount: Function;
}

// CommentView
export interface SendComments {
    count: number;
    photos: Photo[];
    setPhotos: Function;
    comments: Comments[];
    getJSONData: Function;
    visible: boolean;
    history: any;
    route: string;
    RETRIEVE_SCRIPT: string;
}