import React, { useEffect, useState } from 'react'
import axios from 'axios'

const EX12_axios = () => {

    let url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=490f85654295293a40c8336e13f89c02&targetDt=20250601'

    const [movieList, setMovieList] = useState()

    // console.log('영화목록', movieList)

    useEffect(() => {
        axios.get(url)
        .then(res => {
            // console.log(res.data.boxOfficeResult.dailyBoxOfficeList)
            setMovieList(res.data.boxOfficeResult.dailyBoxOfficeList)
        })
        .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <h1>영화 순위</h1>
            {movieList && movieList.map(item => <p>{item.rank}위 {item.movieNm}</p>)}

        </div>
    )
}

export default EX12_axios