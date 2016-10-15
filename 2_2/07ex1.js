// 데이트 신청이 들어오면 허락할 거야 만약(if)
// 괜찮은 사람이면,

// 만약(if) 괜찮은 사람이 아니라면, 이번 주에 데이트 잡힌게 3개 이하이거나 주말에 계획이 없으면
// 그래 한번 만나보지 뭐.

// 이도 저도 아니라면, 정중이 거절해야지.
// var person =  window.prompt('어떤 사람입니까?')
// var dates_this_week = window.prompt('계획이 몇개입니까?')
// var week_plans = true
// if (person === '괜찮은 사람'){
//   console.log("시간되요, 일요일에 뵈요!")
// } else if ( dates_this_week < 3 || !week_plans ) {
//   console.log('뭐, 안될 거야 없죠')
// } else {
//   console.log("생각해 주셔서 감사해요, 근데 이번에 미국에서 제 친구가 와서요...")
// }

if (prompt('어떤사람?')==='괜찮은 사람'){
  console.log("시간되요, 일요일에 뵈요!")
}else if (prompt('계획이 몇개입니까?')<=3){
  console.log('뭐, 안될 거야 없죠..')
}else {
  console.log('생각해 주셔서 감사해요, 근데 이번에 미국에서 제 친구가 와서요...')
}
