export const DOTS = "...";

function usePagination({currentPage,    totalCount,    pageSize}) {
  // console.log("called", totalCount);
  const lastPage = Math.ceil(totalCount/pageSize);
  console.log("curr ", currentPage)
  
 if(currentPage==1){
  return [1,2,3,DOTS,lastPage];
 }
 if(currentPage==2){
  return [1,currentPage,currentPage+1,DOTS,lastPage];
 }
 if(currentPage>=3 &&  currentPage<=lastPage-2){
  return [1,DOTS,currentPage-1,currentPage,currentPage+1,DOTS,lastPage];
 }
 if(currentPage==lastPage-1){
  return [1,DOTS,currentPage-1,currentPage,lastPage]
 }
 if(currentPage == lastPage){
  return [1,DOTS,lastPage-2,lastPage-1,lastPage]
 }
//  return [1,currentPage,currentPage+1,DOTS,lastPage];
}

export default usePagination;
