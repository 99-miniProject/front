import React from 'react';
import { history } from '../redux/configStore';
import { Grid, Text, Button } from '../elements';

const NotFound = (props) => {
	return (
		<React.Fragment>
			<Grid width={'70vw'} height={'60vh'} margin={'20px 0px'}>
				<Grid width={'100%'} fd="column">
					<Grid>
						<Text
							bold="700"
							fontSize="3rem"
							others="margin-bottom:2rem"
						>
							주소가 올바르지 않아요!
						</Text>
					</Grid>
					<Grid>
						<Button
							_onClick={() => {
								history.push('/');
							}}
							width="25rem"
							height="3rem"
							bradius="2rem"
							others="&:hover{opacity:80%}"
						>
							<Text color="white" fontSize="1.3rem" bold="700">
								메인으로 돌아가기
							</Text>
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default NotFound;
