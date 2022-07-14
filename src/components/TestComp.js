import { useEffect, useState } from "react"


const TestComp = () => {
    const [obj, setObj] = useState({})

    useEffect(() => {
        console.log("inside useEffect")
        setObj({ firstName: "ashish" })
    }, [])

    console.log("inside test comp", obj)
    return (
        <div>
            hi
        </div>
    )
}
//const [page, setPage] = useState(0)
//     const PER_PAGE = 5;
//     const pagevisited = page * PER_PAGE;
//     const displaypage = data.slice(pagevisited, pagevisited + PER_PAGE).map((data) => {
//         return (
//             <div className='data'>
//                 <li>{data.id}</li>
//                 <li>{data.useId}</li>
//                 <li>{data.title}</li>
//             </div>
//         ); }
// const pagecount = Math.ceil(data.length / PER_PAGE);

// function handlepage({ selected: selectedpage }) {
//     console.log('selected page ', selectedpage)
//     setCurrentPage(selectedPage);
// }
{/* <ReactPaginate
                previousLabel={"← Previous"}
                nextLabel={"Next →"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
            />
            {currentPageData} */}
export default TestComp
