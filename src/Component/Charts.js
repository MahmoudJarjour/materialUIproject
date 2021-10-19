
import { Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import data from '../data/chartsdata';
import i18next from 'i18next';

const getLanguage = () => i18next.language || window.localStorage.i18nextLng;


/*  <defs>
					<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
						<stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
					</linearGradient>
					<linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
						<stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
					</linearGradient>
				</defs> */

const Charts = () => {
	const { t } = useTranslation();

	return (
		<>
		<ResponsiveContainer width='80%' aspect={2}>
			<AreaChart  data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
				
				<XAxis dataKey="name" reversed={getLanguage() === 'ar' ? true : false} />
				<YAxis orientation={getLanguage() === 'ar' ? 'right' : 'left'}/>
				<CartesianGrid strokeDasharray="3 3" />
				<Tooltip />
				<Area type="monotone" dataKey="price" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)"  />
			</AreaChart>

			</ResponsiveContainer>

			<Typography >{t('chart discription')}</Typography>
		</>
	);
};

export default withTranslation()(Charts);
