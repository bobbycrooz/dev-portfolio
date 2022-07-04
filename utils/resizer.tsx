

export const resizer = (callback : (value: boolean) => void , setter: (number: number) => void ) => {
    if(document?.body?.clientWidth > 800){
        callback(false)
        setter(document.body.clientWidth)
        return

    }

       if (document?.body?.clientWidth < 800) {
         callback(true);
         setter(document?.body?.clientWidth);
         return;
       }
};
