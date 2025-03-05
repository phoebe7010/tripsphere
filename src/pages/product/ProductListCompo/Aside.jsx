const Aside = () => {
  return (
    <>
      {/* 검색 옵션 패널 */}
      <aside
        className=""
        style={{
          position: 'fixed',
          left: '4rem',
          top: '8rem',
          border: '1px solid green',
          borderRadius: '30px',
        }}>
        <form
          className=""
          style={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '20px',
            padding: '10px',
            // backgroundColor: 'pink',
            // border: '1px solid lightgreen',
            // borderRadius: '50px',
          }}>
          <div
            style={{
              diplay: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <h2 style={{ width: '50%' }}>검색하기</h2>
            <button
              type="button"
              style={{ color: '#ff1111ff' }}>
              {' '}
              검색 옵션 지우기{' '}
            </button>
          </div>
          {/* 여행 장소 선택 */}
          <fieldset
            className=""
            style={{ display: 'flex', flexDirection: 'column' }}>
            <legend>여행 장소</legend>
            {/* <select
              name="travel-spot"
              style={{ border: '1px solid black ' }}>
              {['a', 'b', 'c', 'd', '...'].map(ele => (
                <option>{ele}</option>
              ))}
            </select> */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              {['서울', '대전', '대구', '부산', '찍고', '아하'].map(ele => (
                <label htmlFor={ele}>
                  <div>
                    <input
                      type="checkbox"
                      id={ele}
                      name={ele}
                    />
                    {ele}
                  </div>
                </label>
              ))}
            </div>
          </fieldset>

          {/* 숙박 장소 선택 */}
          <fieldset
            className=""
            style={{ display: 'flex', flexDirection: 'column' }}>
            <legend>숙박 장소</legend>
            {/* 
            <div>
              <select
                name="travel-spot"
                style={{ border: '1px solid black ' }}>
                {['a', 'b', 'c', 'd', '...'].map(ele => (
                  <option>{ele}</option>
                ))}
              </select>
            </div>
             */}

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                columnGap: '10px',
                rowGap: '5px',
              }}>
              {['호텔', '펜션', '게스트하우스', '노숙'].map(ele => (
                <label htmlFor={ele}>
                  <div>
                    <input
                      type="checkbox"
                      id={ele}
                      name={ele}
                    />
                    {ele}
                  </div>
                </label>
              ))}
            </div>
          </fieldset>

          {/* 예산 범위 선택 */}
          <fieldset
            className=""
            style={{ display: 'flex', flexDirection: 'column' }}>
            <legend> 가격 </legend>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <label htmlFor="minbudget">
                <input
                  id="minbudget"
                  className=""
                  style={{ border: '1px solid black', width: '50px' }}
                />
                만원
              </label>
              ~
              <label htmlFor="maxbudget">
                <input
                  id="maxbudget"
                  className=""
                  style={{ border: '1px solid black', width: '50px' }}
                />
                만원
              </label>
            </div>
          </fieldset>

          {/* 인원 수정 */}
          <fieldset className="">
            <legend>인원</legend>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <label style={{ width: '50%' }}>성인</label>
              <div style={{ display: 'flex', width: '50%' }}>
                <button>-</button>
                <input
                  type="number"
                  style={{ width: '30px' }}
                />
                <button>+</button>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <label style={{ width: '50%' }}>어린이</label>
              <div style={{ display: 'flex', width: '50%' }}>
                <button>-</button>
                <input
                  type="number"
                  style={{ width: '30px' }}
                />
                <button>+</button>
              </div>
            </div>
          </fieldset>

          {/* 여행 기간 선택 */}
          <fieldset>
            <legend>여행 기간 선택</legend>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <label>시작</label>
              <input type="date" />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <label>종료</label>
              <input type="date" />
            </div>
          </fieldset>

          <button
            type="submit"
            className=""
            style={{
              width: '100%',
              backgroundColor: '#dfd',
              border: '1px solid brown',
              borderRadius: '10px',
            }}>
            옵션 수정 적용
          </button>
        </form>
      </aside>
    </>
  );
};

export default Aside;
