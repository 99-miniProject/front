import React from 'react';
import Reviews from '../components/Reviews';
import { Input, Button, Text, Grid, Image } from '../elements/index';

const DetailPage = (props) => {
	const { camping_name, camping_price, camping_num } = props;
	console.log(props.match.params.id);

	const camping_data = {
		camping_name,
		camping_price,
		camping_num,
	};

	return (
		<>
			<Grid fd="column" width="100vw">
				<Text fontSize="4rem" bold="700" others="margin:2rem;">
					{camping_name}
				</Text>
				<Image
					others="-webkit-box-shadow: 5px 7px 12px 0px rgba(0,0,0,0.78); 
							box-shadow: 5px 7px 12px 0px rgba(0,0,0,0.78);margin-bottom:1.3rem;"
					bradius="18px"
				/>
				<Text
					fontSize="2rem"
					bold="700"
					others="margin-top:3.8rem;margin-bottom:1.2rem;"
				>
					캠핑장 정보
				</Text>
				<Grid width="70vw" jc="space-between">
					<Grid fd="column" width="25vw">
						<Grid
							width="25vw"
							jc="left"
							others="margin-left:20vw;margin-bottom:2rem;"
						>
							<Text
								fontSize="2.3rem"
								bold="700"
								center
								others="margin-right:2.5rem"
							>
								가격
							</Text>
							<Text fontSize="1rem">{camping_price}</Text>
						</Grid>
						<Grid width="25vw" jc="left" others="margin-left:20vw">
							<Text
								fontSize="2.3rem"
								bold="700"
								center
								others="margin-right:2.5rem"
							>
								인원
							</Text>
							<Text fontSize="1rem">{camping_num}</Text>
						</Grid>
					</Grid>
					<Grid width="35vw">
						<Text center>
							ㅁ 글램핑 최초 개별온수수영장,개별찜질방 ㅁ몸만 오면
							되는 풀세팅 럭셔리글램핑 ㅁ 숲속에서의 독립된
							휴식공간 ㅁ
							퀸사이즈침대+냉장고+TV+에어컨+쇼파+LG인덕션+선풍기+식탁+커피포트+공기청정기+싱크대+각종식기류일체+캠핑의자
							+객실샤워실+개별화장실+개별개수대+실외리빙공간 ㅁ
							수건,샴푸,비누 ㅁ 입실 14시 /퇴실 11시 ㅁ 20년 5월
							신규놀이기구 -수중범퍼카 .에어방수 놀이기구 ㅁ
							무료이용서비스 :
							수영장/바이킹/꼬마기차/레일썰매/족구장/얼음썰매/눈썰매
						</Text>
					</Grid>
				</Grid>
				<Button
					width="30rem"
					height="3rem"
					bradius="15px"
					others="margin-top:2rem;&:hover{opacity:80%}"
				>
					예약하기
				</Button>
			</Grid>
			<hr style={{ marginTop: '2rem', width: '75vw' }} />
			<Grid fd="column">
				<Reviews />
			</Grid>
		</>
	);
};

DetailPage.defaultProps = {
	camping_name: '애옹이 캠핑장 3',
	camping_price: '77,000~99,000',
	camping_num: '2~6명',
	review_user_name: 'kyuung',
	review_user_content: '여기서 키우는 고양이가 진짜 귀여워요 ',
};

export default DetailPage;
