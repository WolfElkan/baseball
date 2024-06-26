const lineup_html = `
<div class="roster">
	Batting Order
	<table>
		<thead>
			<th></th>
			<th class="away teamname"></th>
			<th class="home teamname"></th>
		</thead>
		<tr class="pitchers">
			<td>P</td>
			<td class="away_P">
				<select class="away-pitcher" name="away_0_num" id="away_0_num"></select>
			</td>
			<td class="home_P">
				<select class="home-pitcher" name="home_0_num" id="home_0_num"></select>
			</td>
		</tr>
		<tr>
			<td>1</td>
			<td class="away_1">
				<select class="position" name="away_1_pos" id="away_1_pos"></select>
				<select class="away-hitter" name="away_1_num" id="away_1_num"></select>
			</td>
			<td class="home_1">
				<select class="position" name="home_1_pos" id="home_1_pos"></select>
				<select class="home-hitter" name="home_1_num" id="home_1_num"></select>
			</td>
		</tr>
		<tr>
			<td>2</td>
			<td class="away_2">
				<select class="position" name="away_2_pos" id="away_2_pos"></select>
				<select class="away-hitter" name="away_2_num" id="away_2_num"></select>
			</td>
			<td class="home_2">
				<select class="position" name="home_2_pos" id="home_2_pos"></select>
				<select class="home-hitter" name="home_2_num" id="home_2_num"></select>
			</td>
		</tr>
		<tr>
			<td>3</td>
			<td class="away_3">
				<select class="position" name="away_3_pos" id="away_3_pos"></select>
				<select class="away-hitter" name="away_3_num" id="away_3_num"></select>
			</td>
			<td class="home_3">
				<select class="position" name="home_3_pos" id="home_3_pos"></select>
				<select class="home-hitter" name="home_3_num" id="home_3_num"></select>
			</td>
		</tr>
		<tr>
			<td>4</td>
			<td class="away_4">
				<select class="position" name="away_4_pos" id="away_4_pos"></select>
				<select class="away-hitter" name="away_4_num" id="away_4_num"></select>
			</td>
			<td class="home_4">
				<select class="position" name="home_4_pos" id="home_4_pos"></select>
				<select class="home-hitter" name="home_4_num" id="home_4_num"></select>
			</td>
		</tr>
		<tr>
			<td>5</td>
			<td class="away_5">
				<select class="position" name="away_5_pos" id="away_5_pos"></select>
				<select class="away-hitter" name="away_5_num" id="away_5_num"></select>
			</td>
			<td class="home_5">
				<select class="position" name="home_5_pos" id="home_5_pos"></select>
				<select class="home-hitter" name="home_5_num" id="home_5_num"></select>
			</td>
		</tr>
		<tr>
			<td>6</td>
			<td class="away_6">
				<select class="position" name="away_6_pos" id="away_6_pos"></select>
				<select class="away-hitter" name="away_6_num" id="away_6_num"></select>
			</td>
			<td class="home_6">
				<select class="position" name="home_6_pos" id="home_6_pos"></select>
				<select class="home-hitter" name="home_6_num" id="home_6_num"></select>
			</td>
		</tr>
		<tr>
			<td>7</td>
			<td class="away_7">
				<select class="position" name="away_7_pos" id="away_7_pos"></select>
				<select class="away-hitter" name="away_7_num" id="away_7_num"></select>
			</td>
			<td class="home_7">
				<select class="position" name="home_7_pos" id="home_7_pos"></select>
				<select class="home-hitter" name="home_7_num" id="home_7_num"></select>
			</td>
		</tr>
		<tr>
			<td>8</td>
			<td class="away_8">
				<select class="position" name="away_8_pos" id="away_8_pos"></select>
				<select class="away-hitter" name="away_8_num" id="away_8_num"></select>
			</td>
			<td class="home_8">
				<select class="position" name="home_8_pos" id="home_8_pos"></select>
				<select class="home-hitter" name="home_8_num" id="home_8_num"></select>
			</td>
		</tr>
		<tr>
			<td>9</td>
			<td class="away_9">
				<select class="position" name="away_9_pos" id="away_9_pos"></select>
				<select class="away-hitter" name="away_9_num" id="away_9_num"></select>
			</td>
			<td class="home_9">
				<select class="position" name="home_9_pos" id="home_9_pos"></select>
				<select class="home-hitter" name="home_9_num" id="home_9_num"></select>
			</td>
		</tr>
	</table>
	<button id="submitlineup">Submit</button>
</div>
`