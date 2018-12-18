function produceDrivingRange(range) {
	return function (start, end) {
			
			start = parseInt (start.slice(0, start.length - 2));
			end = parseInt(end.substr(0, end.length - 2));

			const dist = Math.abs(end - start);
			
			if (range >= dist) {
				return `within range by ${range - dist}`;
			} else {
				return `${dist - range} blocks out of range`;
			}
		};
}

function produceTipCalculator(frac) {
	return function (fare) { return frac * fare; };
}

function createDriver () {
	let id = 0;

	return	class Driver {
						constructor (name) {
							this.name = name;
							this.id = ++id;
						} 
					};
}
