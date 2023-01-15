export const calculateMarginDotNavigation=(v:string)=>{
    return v.split(' ')
    .map((v: string) => {
      return v + 'vw';
    })
    .join(' ')
}
export const calculatePaddingNavigation=(v:string)=>{
    return v.split(' ')
    .map((v: string) => {
      return v + 'px';
    })
    .join(' ')
}