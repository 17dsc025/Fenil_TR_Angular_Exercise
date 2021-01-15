export class Post {
    like: number;
    isLiked:boolean=false;
  
    constructor(initialLike: number) {
      this.like = initialLike;
    }
    ClickLike():void{
        if(this.isLiked===false){
            this.like=this.like+1;
            console.log("You liked a post. total like:",this.like)
            this.isLiked=true;
        }
        else{
            this.like=this.like-1;
            console.log("You removed a like in post. total like:",this.like)
            this.isLiked=false;
        }
    }
  }