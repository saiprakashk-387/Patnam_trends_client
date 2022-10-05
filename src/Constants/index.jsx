export const baseUrl =`${process.env.REACT_APP_PATNAM_TRENDS_API}` ;
export const registerUrl= `${baseUrl}/register`;
export const loginUrl=`${baseUrl}/login`;
export const Url=`${baseUrl}/myuser`

export const ACCESS_TOKEN = () => sessionStorage.getItem('access_token');

export const debounce=(fn, delay)=> {
    let timer;
    return function () {
      let context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    };
  }