// class IObserver {

//   constructor() {

//     this.options = {
//       root: null,
//       rootMargin: '0px',
//       threshold: 1.0
//     }

//     this.observer = false;

//   }

//   getObserver(callback) {
//     if ('IntersectionObserver' in window && !this.observer){
//       this.observer = new IntersectionObserver(callback, this.options)
//     }
//     return observer
//   }

// }

let observer = false;


export default function getObserver(callback) {
  if ('IntersectionObserver' in window && !observer){

    let options = {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: [0.1],
    }

    observer = new IntersectionObserver(callback, options)
  }
  return observer
}
