export const calculateMarginDotNavigation=(v:string)=>{
    return v.split(' ')
    .map((v: string) => {
      return v + 'vw';
    })
    .join(' ')
}