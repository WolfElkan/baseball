const diagram_html = `
<svg height="222" width="200">

	<circle cx="100" cy="130" r="130" fill="green"></circle>
	<circle cx="100" cy="130" r="80" fill="tan"></circle>
	<!-- <circle cx="100" cy="150" r="105" fill="none" stroke="red"></circle> -->
	<!-- <circle cx="100" cy="150" r="60" fill="none" stroke="red"></circle> -->
	<polygon points="100,180, 150,130 100,80 50,130" fill="green"></polygon>
	<polygon points="0,100 100,200 200,100 200,280 0,280" fill="green"></polygon>
	<polygon points="0,130 100,230 200,130 200,280 0,280" fill="white" class="mask"></polygon>
	<circle cx="100" cy="187" r="20" fill="tan"></circle>

	<circle cx="100" cy="130" r="10" class="of P">P</circle>
	<text x="100" y="130" class="of P"></text>

	<circle cx="100" cy="210" r="10" class="of C">C</circle>
	<text x="100" y="210" class="of C"></text>

	<circle cx="150" cy="100" r="10" class="of 1B">1B</circle>
	<text x="150" y="100" class="of 1B"></text>

	<circle cx="130" cy="80" r="10" class="of 2B">2B</circle>
	<text x="130" y="80" class="of 2B"></text>

	<circle cx="70" cy="80" r="10" class="of SS">SS</circle>
	<text x="70" y="80" class="of SS"></text>

	<circle cx="50" cy="100" r="10" class="of 3B">3B</circle>
	<text x="50" y="100" class="of 3B"></text>

	<circle cx="37" cy="46" r="10" class="of LF">LF</circle>
	<text x="37" y="46" class="of LF"></text>

	<circle cx="100" cy="25" r="10" class="of CF">CF</circle>
	<text x="100" y="25" class="of CF"></text>

	<circle cx="163" cy="46" r="10" class="of RF">RF</circle>
	<text x="163" y="46" class="of RF"></text>		

	<polygon points="110,190 100,200 90,190 90,177 110,177" fill="white" class="if H"></polygon>
	<text x="100" y="185" class="if H"></text>

	<polygon points="147,130 160,143 173,130 160,117" fill="white" class="if B1"></polygon>
	<text x="160" y="130" class="if B1"></text>
	
	<polygon points="87, 70 100, 83 113, 70 100, 57" fill="white" class="if B2"></polygon>
	<text x="100" y="70" class="if B2"></text>

	<polygon points="27,130  40,143  53,130  40,117" fill="white" class="if B3"></polygon>
	<text x="40" y="130" class="if B3"></text>
	
</svg>`