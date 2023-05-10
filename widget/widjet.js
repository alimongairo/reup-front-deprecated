function ipolWidjetController(setups) {

	var defSetups = {
		label: 'iWidjet',
		params: {}
	};

	if (typeof(setups) === 'undefined') {
		setups = {};
	}

	for (var i in defSetups) {
		if (typeof (setups[i]) === 'undefined') {
			setups[i] = defSetups[i];
		}
	}

	var label = setups.label;
	var params = setups.params;

	this.options = {
		get: function (wat) {
			return options.get(wat);
		},
		set: function (value, option) {
			options.set(value, option);
		}
	};

	this.binders = {
		add: function (callback, event) {
			bindes.addBind(callback, event);
		},
		trigger: function (event, args) {
			bindes.trigger(event, args);
		}
	};

	this.states = {
		check: function (state) {
			states.check(state);
		}
	};

	this.service = {
		cloneObj: function (obj) {
			return service.cloneObj(obj);
		},
		concatObj: function (main, sub) {
			return service.concatObj(main, sub);
		},
		isEmpty: function (stf) {
			return service.isEmpty(stf);
		},
		inArray: function (wat, arr) {
			return service.inArray(wat, arr);
		},
		loadTag: function (src, mode, callback) {
			service.loadTag(src, mode, callback);
		}
	};

	this.logger = {
		warn: function (wat) {
			return logger.warn(wat);
		},
		error: function (wat) {
			return logger.error(wat);
		},
		log: function (wat) {
			return logger.log(wat);
		}
	};

	var logger = {
		warn: function (wat) {
			if (this.check('warn')) {
				console.warn(label + ": ", wat);
			}
		},

		error: function (wat) {
			if (this.check('error')) {
				console.error(label + ": ", wat);
			}
		},

		log: function (wat) {
			if (this.check('log')) {
				if (typeof (wat) === 'object') {
					console.log(label + ": ");
					for (var i in wat) {
						console.log(i, wat[i]);
					}
				} else {
					console.log(label + ": ", wat);
				}
			}
		},

		check: function (type) {
			var depthCheck = false;

			switch (type) {
				case 'warn'  :
					depthCheck = options.check(true, 'showWarns');
					break;
				case 'error' :
					depthCheck = options.check(true, 'showErrors');
					break;
				case 'log'   :
					depthCheck = options.check(true, 'showLogs');
					break;
			}

			return (
				depthCheck &&
				options.check(false, 'hideMessages')
			)
		}
	};

	var service = {
		cloneObj: function (obj) {
			var ret = false;
			if (typeof(obj) !== 'object')
				return ret;
			if (arguments.length === 1) {
				ret = {};
				for (var i in obj)
					ret[i] = obj[i];
			} else {
				ret = [];
				for (var i in obj)
					ret.push(obj[i]);
			}
			return ret;
		},

		concatObj: function (main, sub) {
			if (typeof(main) === 'object' && typeof(sub) === 'object')
				for (var i in sub)
					main[i] = sub[i];
			return main;
		},

		isEmpty: function (stf) {
			var empty = true;
			if (typeof(stf) === 'object')
				for (var i in stf) {
					empty = false;
					break;
				}
			else
				empty = (stf);
			return empty;
		},

		inArray: function (wat, arr) {
			return arr.filter(function (item) {
				return item == wat
			}).length;
		},

		loadTag: function (src, mode, callback) {
			var loadedTag = false;
			if (typeof(mode) === 'undefined' || mode === 'script') {
				loadedTag = document.createElement('script');
				loadedTag.src = src;
				loadedTag.type = "text/javascript";
				loadedTag.language = "javascript";
			} else {
				loadedTag = document.createElement('link');
				loadedTag.href = src;
				loadedTag.rel = "stylesheet";
				loadedTag.type = "text/css";
			}
			var head = document.getElementsByTagName('head')[0];
			head.appendChild(loadedTag);
			if (typeof(callback) !== 'undefined') {
				loadedTag.onload = callback;
				loadedTag.onreadystatechange = function () {
					if (this.readyState === 'complete' || this.readyState === 'loaded')
						loadedTag.onload();
				};
			}
		}
	};

	var options = {
		self: this,
		options: {
			showWarns: {
				value: true,
				check: function (wat) {
					return (typeof(wat) === 'boolean');
				},
				setting: 'start',
				hint: 'Value must be bool (true / false)'
			},
			showErrors: {
				value: true,
				check: function (wat) {
					return (typeof(wat) === 'boolean');
				},
				setting: 'start',
				hint: 'Value must be bool (true / false)'
			},
			showLogs: {
				value: true,
				check: function (wat) {
					return (typeof(wat) === 'boolean');
				},
				setting: 'start',
				hint: 'Value must be bool (true / false)'
			},
			hideMessages: {
				value: false,
				check: function (wat) {
					return (typeof(wat) === 'boolean');
				},
				setting: 'start',
				hint: 'Value must be bool (true / false)'
			},
			mode: {
				value: 'all',
				check: function (wat) {
					return (typeof(wat) === 'string');
				},
				setting: 'start',
				hint: 'Value must be string (pvz / postamat)'
			}
		},

		check: function (value, option, isStrict) {
			var given = this.get(option);
			if (given === null) {
				return null;
			} else {
				if (typeof (isStrict) === 'undefined') {
					return (value === given);
				} else {
					return (value == given);
				}
			}
		},

		get: function (wat) {
			if (typeof(this.options[wat]) !== 'undefined') {
				return this.options[wat].value;
			} else {
				logger.warn('Undefined option "' + wat + '"');
				return null;
			}
		},

		set: function (value, option) {
			if (typeof(this.options[option]) === 'undefined') {
				logger.warn('Undefined option to set : ' + option);
			} else {
				if (
					typeof(this.options[option].check) !== 'function' ||

					this.options[option].check.call(this.self, value)
				) {
					this.options[option].value = value;
				} else {
					var subhint = (typeof(this.options[option].hint) !== 'undefined' && this.options[option].hint) ? ': ' + this.options[option].hint : false;
					logger.warn('Incorrect setting value (' + value + ') for option ' + option + subhint);
				}
			}
		},

		iniSetter: function (values, called) {
			for (var i in options.options) {
				if (
					options.options[i].setting === called &&
					typeof(values[i]) !== 'undefined'
				) {
					options.set(values[i], i);
				}
			}
		}
	};

	var bindes = {
		events: {
			onStart: []
		},

		trigger: function (event, args) {
			if (typeof(this.events[event]) === 'undefined') {
				logger.error('Unknown event ' + event);
			} else {
				if (this.events[event].length > 0) {
					for (var i in this.events[event]) {
						this.events[event][i](args);
					}
				}
			}
		},

		iniSetter: function (params) {
			for (var i in this.events) {
				if (this.events.hasOwnProperty(i)) {
					if (typeof(params[i]) !== 'undefined') {
						if (typeof (params[i]) === 'object') {
							for (var j in params[i]) {
								this.addBind(params[i][j], i);
							}
						} else {
							this.addBind(params[i], i);
						}
					}
				}
			}
		},

		addBind: function (callback, event) {
			if (typeof(callback) === 'function') {
				this.events[event].push(callback);
			} else {
				logger.warn('The callback "' + callback + '" for ' + event + ' is not a function');
			}

		}
	};

	var states = {
		self: this,
		states: {start: {_start: false}},

		check: function (state) {
			var founded = false;
			for (var quenue in this.states) {
				for (var qStates in this.states[quenue]) {
					if (qStates === state) {
						this.states[quenue][qStates] = true;
						founded = quenue;
					}
				}
				if (founded)
					break;
			}

			if (founded) {
				var ready = true;
				for (var i in this.states[founded]) {
					if (!this.states[founded][i]) {
						ready = false;
						break;
					}
				}
				if (ready) {
					if (typeof(loaders[founded]) !== 'undefined') {
						options.iniSetter(params, founded);
						loaders[founded].call(this.self, params);
					}
				}
			} else {
				if (state === 'started')
					logger.error('No callbacks for starting');
				else
					logger.error('Unknown state of loading: ' + state);
			}
		}
	};

	var loaders = {
		'start': function (params) {
			bindes.iniSetter(params);
			bindes.trigger('onStart');
			states.check('started');
		}
	};

	var loadingSetups = {
		'options': 'object',
		'states': 'object',
		'loaders': 'funciton',
		'stages': 'object',
		'events': 'string'
	};

	for (var i in loadingSetups) {
		if (typeof(setups[i]) !== 'undefined') {
			for (var j in setups[i]) {
                if (({}).hasOwnProperty.call(setups[i], j)) {
                    if (typeof(setups[i][j]) !== loadingSetups[i]) {
                        logger.error('Illegal ' + i + ' "' + j + '": ' + setups[i][j]);
                    } else {
                        switch (i) {
                            case 'options' :
                                options.options[j] = service.cloneObj(setups.options[j]);
                                break;
                            case 'states'  :
                                states.states[j] = service.cloneObj(setups.states[j]);
                                break;
                            case 'loaders' :
                                loaders[j] = setups.loaders[j];
                                break;
                            case 'events'  :
                                bindes.events[setups.events[j]] = [];
                                break;
                            case 'stages'  :
                                if (typeof(setups.stages[j].states) !== 'object' || typeof(setups.stages[j].function) !== 'function') {
                                    logger.error('Illegal stage "' + j + '": ' + setups[i][j]);
                                } else {
                                    states.states[j] = service.cloneObj(setups.stages[j].states);
                                    loaders[j] = setups.stages[j].function;
                                }
                                break;
                        }
                    }
                }
			}
		}
	}

	states.check('_start');
}

function ISDEKWidjet(params) {

	if (!params.path) {
		var scriptPath = document.getElementById('ISDEKscript').src;
		scriptPath = scriptPath.substring(0, scriptPath.indexOf('widjet.js')) + 'scripts/';
		params.path = scriptPath;
	}

	if (!params.servicepath) {
		params.servicepath = params.path + 'service.php';
	}

	if (!params.templatepath) {
		params.templatepath = params.path + 'template.php';
	}

	if (!params.currency) {
		params.currency = 'RUB';
	}

	var loaders = {
		onJSPCSSLoad: function () {
			widjet.states.check('JSPCSS');
		},
		onStylesLoad: function () {
			widjet.states.check('JSPCSS');
			widjet.states.check('styles');
		},
		onIPJQLoad: function () {
			widjet.states.check('jquery')
		},
		onJSPJSLoad: function () {
			widjet.states.check('JSPJS')
		},
		onPVZLoad: function () {
			widjet.states.check('PVZ')
		},
		onDataLoad: function () {
			widjet.states.check('data')
		},
		onLANGLoad: function () {
			widjet.states.check('lang')
		},
		onYmapsLoad: function () {
			widjet.states.check('ymaps');
		},
		onYmapsReady: function () {
			widjet.states.check('mapsReady')
		},
		onYmapsInited: function () {
			widjet.states.check('mapsInited')
		},
		onCityFrom: function () {
			widjet.states.check('cityFrom')
		}
	};

	var widjet = new ipolWidjetController({
		label: 'ISDEKWidjet',
		options: {
			path: {
				value: params.path,
				check: function (wat) {
					return (typeof(wat) === 'string');
				},
				setting: 'start',
				hint: 'Value must be string (url)'
			},
			servicepath: {
				value: params.servicepath,
				check: function (wat) {
					return (typeof(wat) === 'string');
				},
				setting: 'start',
				hint: 'Value must be string (url)'
			},
			templatepath: {
				value: params.templatepath,
				check: function (wat) {
					return (typeof(wat) === 'string');
				},
				setting: 'start',
				hint: 'Value must be string (url)'
			},
			country: {
				value: 'all',
				check: function (wat) {
					return (typeof(wat) === 'string');
				},
				setting: 'start',
				hint: 'Value must be string (countryname)'
			},
            lang: {
                value: 'rus',
                check: function (wat) {
                    return (typeof(wat) === 'string');
                },
                setting: 'start',
                hint: 'Value must be string (laguage name)'
            },
			link: {
				value: params.link,
				check: function (wat) {
					return wat === false ? true : (ipjq('#' + wat).length > 0);
				},
				setting: 'afterJquery',
				hint: 'No element whit this id to put the widjet'
			},
			defaultCity: {
				value: params.defaultCity,
				check: function (name) {
					return (this.city.check(name) !== false);
				},
				setting: 'dataLoaded',
				hint: 'Default City wasn\'t founded'
			},
			choose: {
				value: true,
				check: function (wat) {
					return (typeof(wat) === 'boolean');
				},
				setting: 'start',
				hint: 'Value must be bool (true / false)'
			},
            hidedress: {
                value: false,
                check: function (wat) {
                    return (typeof(wat) === 'boolean');
                },
                setting: 'start',
                hint: 'Value must be bool (true / false)'
            },
            hidecash: {
                value: false,
                check: function (wat) {
                    return (typeof(wat) === 'boolean');
                },
                setting: 'start',
                hint: 'Value must be bool (true / false)'
            },
            hidedelt: {
                value: false,
                check: function (wat) {
                    return (typeof(wat) === 'boolean');
                },
                setting: 'start',
                hint: 'Value must be bool (true / false)'
            },
			popup: {
				value: false,
				check: function (wat) {
					return (typeof(wat) === 'boolean');
				},
				setting: 'start',
				hint: 'Value must be bool (true / false)'
			},
			region: {
				value: false,
				check: function (wat) {
					return (typeof(wat) === 'boolean');
				},
				setting: 'start',
				hint: 'Value must be bool (true / false)'
			},
			detailAddress : {
				value : false,
                check: function (wat) {
                    return (typeof(wat) === 'boolean');
                },
                setting: 'start',
                hint: 'Value must be bool (true / false)'
			},
			apikey: {
				value: 'f4e034c2-8c37-4168-8b97-99b6b3b268d7',
				check: function (wat) {
					return (typeof(wat) === 'string');
				},
				setting: 'start',
				hint: 'Value must be string (apikey)'
			},
			goods: {
				value: false,
				check: function (wat) {
					if (typeof(wat) !== 'object') {
						return false;
					}
					if (typeof(wat.width) !== 'undefined') {
						return false;
					}
					for (var i in wat) {
						if (
							typeof(wat[i].length) === 'undefined' || !wat[i].length ||
							typeof(wat[i].width) === 'undefined' || !wat[i].width ||
							typeof(wat[i].height) === 'undefined' || !wat[i].height ||
							typeof(wat[i].weight) === 'undefined' || !wat[i].weight
						)
							return false;
					}
					return true;
				},
				setting: 'start',
				hint: 'Value must be an array of objects of type {length:(float),width:(float),height(float),weight(float)}'
			},

			cityFrom: {
				value: params.cityFrom,
				check: function (name) {
					return (this.city.check(name) !== false);
				},
				setting: 'dataLoaded',
				hint: 'City From wasn\'t founded'
			},
			currency: {
				value: params.currency,
				check: function (currency) {
					return [
						'RUB', 'KZT', 'USD', 'EUR', 'GBP', 'CNY', 'BYN', 'UAH', 'KGS', 'AMD', 'TRY', 'THB', 'KRW',
						'AED', 'UZS', 'MNT'
					].indexOf(currency) !== -1;
				},
				setting: 'start',
				hint: 'Currency wasn\'t founded'
			}
		},
		events: [
			'onChoose',
			'onChooseProfile',
			'onChooseAddress',
			'onReady',
			'onCalculate'
		],
		stages: {
			/*
			 *   when controller is ready - start loadings
			 */
			'mainInit': {
				states: {
					started: false
				},
				function: function () {
					this.service.loadTag(this.options.get('path') + "ipjq.js", 'script', loaders.onIPJQLoad);
					var yalang = (this.options.get('lang') == 'rus') ? 'ru_RU' : 'en_GB';
					this.service.loadTag("https://api-maps.yandex.ru/2.1/?apikey=" + this.options.get('apikey') + "&lang="+yalang, 'script', loaders.onYmapsLoad);
					this.service.loadTag(this.options.get('path') + 'style.css', 'link', loaders.onStylesLoad);

				}
			},
			/*
			 *    when jquery is ready - load extensions and ajax-calls
			 */
			'afterJquery': {
				states: {
					jquery: false
				},
				function: function () {
					this.service.loadTag(this.options.get('path') + 'jquery.mCustomScrollbar.concat.min.js', 'script', loaders.onJSPJSLoad);

					ipjq.getJSON(
						widjet.options.get('servicepath'),
						{isdek_action: 'getPVZ', country: this.options.get('country'), lang: this.options.get('lang'), mode: this.options.get('mode')},
						DATA.parsePVZFile
					);
					ipjq.getJSON(
						widjet.options.get('servicepath'),
						{isdek_action: 'getLang', lang: this.options.get('lang')},
						LANG.write
					);

				}
			},
			/*
			 *  when ymaps's script is added and loaded
			 */
			'ymapsBinder1': {
				states: {
					ymaps: false
				},
				function: function () {
					ymaps.ready(loaders.onYmapsReady());
				}
			},
			/*
			 *    waiting untill ymaps are loaded, ready, steady, go
			 */
			'ymapsBinder2': {
				states: {
					mapsReady: false
				},
				function: function () {
					YmapsLoader();
				}
			},
			/*
			 *   when everything, instead of ymaps is ready
			 */
			'dataLoaded': {
				states: {
					JSPCSS: false,
					JSPJS: false,
					PVZ: false,
					styles: false,
					lang: false
				},
				function: function () {
					loaders.onDataLoad();
					if (widjet.options.get('cityFrom')) {
						ipjq.getJSON(
							widjet.options.get('servicepath'),
							{isdek_action: 'getCity', city: widjet.options.get('cityFrom')},
							function (data) {
								if (typeof(data.error) === 'undefined') {
									CALCULATION.cityFrom = data.id;
								} else {
									widjet.logger.warn("City from was't found " + data.error);
								}
								loaders.onCityFrom('onCityFrom');
							}
						);
					} else {
						loaders.onCityFrom('onCityFrom');
					}
				}
			},
			/*
			 *   when everything is ready
			 */
			'ready': {
				states: {
					data: false,
					mapsInited: false,
					cityFrom: false
				},
				function: function () {
                    if (widjet.options.get('defaultCity') != "auto")
                        DATA.city.set(widjet.options.get('defaultCity'));
					template.readyA = true;
					template.html.loadCityList(DATA.city.collection);
					if (!widjet.popupped) {
						widjet.finalAction();
					} else {
						widjet.loadedToAction = true;
					}

				}
			}
		},
		params: params
	});

	widjet.popupped = false;
	widjet.loadedToAction = false;
	widjet.finalActionCalled = false;
	widjet.loaderHided = false;

	widjet.finalAction = function () {
		if (widjet.finalActionCalled === true) {
			return;
		}
		widjet.finalActionCalled = true;
		template.controller.loadCity();

		this.sdekWidgetEvents();

		this.binders.trigger('onReady');
	};

	widjet.hideLoader = function () {
		if (!widjet.loaderHided) {
			widjet.loaderHided = true;
			ipjq(IDS.get('PRELOADER')).fadeOut(300);
			ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__search, .CDEK-widget__sidebar, .CDEK-widget__logo').removeClass('CDEK-widget__inaccessible');
		}
	};

	function YmapsLoader() {
		if (typeof (widjet.incrementer) === 'undefined') {
			widjet.incrementer = 0;
		}
		if (typeof(ymaps.geocode) !== 'function') {
			if (widjet.incrementer++ > 50) {
				widjet.logger.error('Unable to load ymaps');
			} else {
				window.setTimeout(YmapsLoader, 500);
			}
		} else {
			loaders.onYmapsInited();
		}
	}

	var HTML = {
		blocks: {},
		getBlock: function (block, values) {
			if (typeof HTML.blocks[block] != 'undefined') {
				_tmpBlock = HTML.blocks[block];
				if (typeof values == 'object') {
					for (keyVal in values) {
						_tmpBlock = _tmpBlock.replace(new RegExp('\#' + keyVal + '\#', 'g'), values[keyVal]);
					}
				}
				_tmpBlock = IDS.replaceAll(LANG.replaceAll(_tmpBlock));

				return _tmpBlock;
			}
			return '';

		},
		save: function (data) {
			HTML.blocks = data;
			template.html.place();
		}
	};

	var DATA = {
		regions: {
			collection: {},
			cityes: {},
			map: {}
		},

		// Список городов новой Москвы
		listCityCode: [162, 42932, 13369, 1690, 469, 1198, 75809, 510, 1689, 16338],

		currentCityName: '',

		currentCityCode: 0,

		city: {
			indexOfSome: function (findItem, ObjItem) {
				for (keyI in ObjItem) {
					if (ObjItem[keyI] == findItem) {
						return keyI;
					}
				}
				return false;
			},
			collection: {},
			collectionFull: {},
			current: false,
			get: function () {
				return this.current;
			},
			set: function (intCityID,forse=false) {
				if (this.checkCity(intCityID)) {
					if (typeof(this.collection[intCityID]) === 'undefined' && !forse) {
						if (!(intCityID = this.indexOfSome(intCityID, this.collection))) {
							return false;
						}
					}
					this.current = intCityID;
					return intCityID;
				} else {
					widjet.logger.error('Unknown city: ' + intCityID);
					return false;
				}
			},

			checkCity: function (intCityID) {
				return (typeof(this.collection[intCityID]) !== 'undefined') || this.indexOfSome(intCityID, this.collection) > -1;
				// return true;
			},
			getName: function (intCityID) {
				if (this.checkCity(intCityID)) {
					if (typeof(this.collection[intCityID]) === 'undefined') {
						intCityID = this.indexOfSome(intCityID, this.collection);
					}
					return this.collection[intCityID];
				}
				return false;
			},
			getFullName: function (intCityID) {
				if (this.checkCity(intCityID)) {
					if (typeof(this.collectionFull[intCityID]) === 'undefined') {
						intCityID = this.indexOfSome(intCityID, this.collectionFull);
					}
					return this.collectionFull[intCityID];
				}
				return false;
			},
			getId: function (intCityID) {
				if (this.checkCity(intCityID)) {
					if (typeof(this.collection[intCityID]) === 'undefined') {
						intCityID = this.indexOfSome(intCityID, this.collection);
					}
					return intCityID;
				}
				return false;
			}
		},

		PVZ: {
			collection: {},
            bycoord: {},
			bycoordCur: 0,

			check: function (intCityID) {
				return (
					DATA.city.checkCity(intCityID) &&
					typeof(this.collection[intCityID]) !== 'undefined'
				)
			},

			getCityPVZ: function (intCityID) {
				if (DATA.listCityCode.includes(Number(intCityID))) {
					if (DATA.currentCityName === 'Россия Москва Москва') {
						return this.collection[44];
					} else {
						return this.collection[intCityID + '_distance'];
					}
				}
				if (this.check(intCityID)) {
					return this.collection[intCityID];
				} else {
					widjet.logger.error('No PVZ in city ' + intCityID);
				}
			},

			getRegionPVZ: function (intCityID) {

				if (this.check(intCityID)) {
					let by_region = {};
					let region = DATA.regions.cityes[intCityID];
					let city_in_region = [];
					city_in_region.push(...DATA.regions.map[region]);
					if (region === 81) city_in_region.push(...DATA.regions.map[9]);
					if (region === 9) city_in_region.push(...DATA.regions.map[81]);
					if (region === 82) city_in_region.push(...DATA.regions.map[26]);
					if (region === 26) city_in_region.push(...DATA.regions.map[82]);
					city_in_region.forEach((item, i, arr) => {
						var pvzList =  DATA.PVZ.collection[item];
						for (let code in pvzList) {
							by_region[code] = pvzList[code];
						}
					});
					return by_region;
				} else {
					widjet.logger.error('No PVZ in city ' + intCityID);
				}
			},

			getCurrent: function () {
				let cityCode = DATA.city.current;
				if (DATA.currentCityCode !== 0) {
					cityCode = DATA.currentCityCode;
				}


				if (widjet.options.get('region')) return this.getRegionPVZ(cityCode);
				return this.getCityPVZ(cityCode);
			}
		},

		address : {
			current : false,

			get : function () {
				return DATA.address.current;
            },

			set : function (address) {
				DATA.address.current = address;
            },

			fill : function (address) {
				DATA.address.set(address);
            }
		},

		parsePVZFile: function (data) {
			if (typeof(data.pvz) === 'undefined') {
				var sign = 'Unable to load list of PVZ : ';
				if (typeof(data.pvz) === 'undefined') {
					for (var i in data.error) {
						sign += data.error[i] + ", ";
					}
					sign = sign.substr(0, sign.length - 2);
				} else {
					sign += 'unknown error.'
				}
				widjet.logger.error(sign);
			}
			else {
				if (typeof(data.pvz.REGIONS) !== 'undefined') {
					DATA.regions.collection = data.pvz.REGIONS;
					DATA.regions.cityes = data.pvz.CITYREG;
					DATA.regions.map = data.pvz.REGIONSMAP;
				}

				for (var pvzCity in data.pvz.PVZ) {
					if (DATA.listCityCode.includes(Number(pvzCity))) {
						DATA.PVZ.collection[44] = {...DATA.PVZ.collection[44], ...data.pvz.PVZ[pvzCity]}
					}
					DATA.PVZ.collection[pvzCity] = data.pvz.PVZ[pvzCity];
					if (
						typeof(data.pvz.CITY[pvzCity]) !== 'undefined' &&
						typeof(DATA.city.collection[pvzCity]) === 'undefined'
					) {
						DATA.city.collection[pvzCity] = data.pvz.CITY[pvzCity];
						DATA.city.collectionFull[pvzCity] = data.pvz.CITYFULL[pvzCity];
					}
				}

				loaders.onPVZLoad();
			}
		}

	};

	var CALCULATION = {
		bad: false,
		profiles: {
			courier: {
				price: 0,
				currency: 'RUB',
				term: 0,
				tarif: false
			},
			pickup: {
				price: 0,
				currency: 'RUB',
				term: 0,
				tarif: false
			}
		},
		history: [],
		defaultGabs: {length: 20, width: 30, height: 40, weight: 1},

		cityFrom: false,

		binder: {},

		calculate: function (forse=false) {
			if (this.cityFrom) {
				let courier_idx = this.history.findIndex( (e) => (
					e.code === parseInt(DATA.city.current) && e.type === 'courier') && e.weight === cargo.getWeight()
				);
				let pickup_idx = this.history.findIndex( (e) => (
					e.code === parseInt(DATA.city.current) && e.type === 'pickup') && e.weight === cargo.getWeight()
				);
				if (courier_idx !== -1 && pickup_idx !== -1) {
					for (var i in this.profiles) {
						let idx = (i === 'pickup') ? pickup_idx : courier_idx;
						if (idx !== -1) {
							this.profiles[i].price = this.history[idx].price;
							this.profiles[i].term = this.history[idx].term;
							this.profiles[i].tarif = this.history[idx].tarif;
						}
					}
					widjet.binders.trigger('onCalculate', {
						profiles: widjet.service.cloneObj(CALCULATION.profiles),
						city: DATA.city.current,
						cityName: DATA.city.getName(DATA.city.current)
					});
				}
				else {
					let mark = Date.now();
					//Замена кода города для НП "Быково село"
					//Дополнительный комментарий в service.php getCityByName
					if (DATA.city.current === 63015) {
						DATA.city.current = 1195;
					}

					// this.binder = {};
					this.binder[parseInt(DATA.city.current)] = {};
					for (let i in this.profiles) {
						this.profiles[i].price = null;
						this.profiles[i].term = null;
						this.profiles[i].tarif = false;
						this.request(i, mark,forse);
					}
				}
			} else {
				widjet.logger.warn('No city from given: calculation is impossible');
			}
		},

		request: function (type, timestamp,forse=false) {
			var data = {
				'type': type
			};

			if (typeof cargo.get()[0] !== 'undefined') {
				var cargos = cargo.get();
				data.goods = [];
				for (var i in cargos) {
					data.goods.push(cargos[i]);
				}
			} else {
				data.goods = [this.defaultGabs];
			}

			data.cityFromId = this.cityFrom;
			data.cityToId = (forse) ? DATA.city.get() : DATA.city.getId(DATA.city.current);
			data.currency = widjet.options.get('currency');

			if (typeof(timestamp) !== 'undefined') {
				data.timestamp = timestamp;
			}

            if (DATA.city.current)
                ipjq.getJSON(
				widjet.options.get('servicepath'),
				{isdek_action: 'calc', shipment: data},
				CALCULATION.onCalc
			);
		},

		onCalc: function (answer) {
			if (typeof(answer.error) !== 'undefined') {
				CALCULATION.bad = true;
				var sign = "";
				var thisIsNorma = false;
				for (var i in answer.error) {
					if (typeof(answer.error[i]) === 'object') {
						for (var j in answer.error[i]) {
							sign += answer.error[i][j].text + ' (' + answer.error[i][j].code + '), ';
							if (answer.error[i][j].code === 3)
								thisIsNorma = true;
						}
					} else {
						sign += answer.error[i] + ', ';
					}
				}
				if (thisIsNorma) {
					widjet.logger.warn('Troubles while calculating: ' + sign.substring(0, sign.length - 2));
					if (typeof(answer.type) !== 'undefined') {
						CALCULATION.profiles[answer.type].price = false;
						CALCULATION.profiles[answer.type].term = false;
						CALCULATION.profiles[answer.type].tarif = false;
					}
				} else
					widjet.logger.error('Error while calculating: ' + sign.substring(0, sign.length - 2));
			} else {
				CALCULATION.bad = false;
				CALCULATION.profiles[answer.type].price = answer.result.price;
				CALCULATION.profiles[answer.type].currency = answer.result.currency;
				CALCULATION.profiles[answer.type].term = (answer.result.deliveryPeriodMax === answer.result.deliveryPeriodMin) ? answer.result.deliveryPeriodMin : answer.result.deliveryPeriodMin + "-" + answer.result.deliveryPeriodMax;
				CALCULATION.profiles[answer.type].tarif = typeof answer.result.tarif != 'undefined' ? answer.result.tarif : answer.result.tariffId;
				CALCULATION.history.push({
					code: parseInt(DATA.city.current),
					weight: cargo.getWeight(),
					type: answer.type,
					price: answer.result.price,
					currency: answer.result.currency,
					term: CALCULATION.profiles[answer.type].term,
					tarif: CALCULATION.profiles[answer.type].tarif
				});
			}

			if (typeof(answer.type) !== 'undefined' && typeof(CALCULATION.binder[parseInt(DATA.city.current)]) !== 'undefined') {
				CALCULATION.binder[parseInt(DATA.city.current)][answer.type] = true;
				for (var i in CALCULATION.profiles) {
					if (typeof(CALCULATION.binder[parseInt(DATA.city.current)][i]) === 'undefined') {
						return false;
					}
				}
				widjet.binders.trigger('onCalculate', {
					profiles: widjet.service.cloneObj(CALCULATION.profiles),
					city: DATA.city.current,
					cityName: DATA.city.getName(DATA.city.current)
				});
			}
		}
	};

	var cargo = {
		collection: (typeof widjet.options.get('goods') === 'object') ? widjet.options.get('goods') : [],

		add: function (item) {
			if (
				typeof(item) !== 'object' ||
				typeof(item.length) === 'undefined' ||
				typeof(item.width) === 'undefined' ||
				typeof(item.height) === 'undefined' ||
				typeof(item.weight) === 'undefined'
			) {
				widjet.logger.error('Illegal item ' + item);
			} else {
				this.collection.push({
					length: item.length,
					width: item.width,
					height: item.height,
					weight: item.weight
				});
				widjet.calculate();
			}
		},

		reset: function () {
			this.collection = [];
		},

		get: function () {
			return widjet.service.cloneObj(this.collection);
		},

		getWeight: function () {
			return this.collection.reduce((a, b) => a + b.weight, 0);
		}
	};

	var LANG = {
		collection: {},
		replaceAll: function (content) {
			for (langKey in this.collection) {
				content = content.replace(new RegExp('\#' + langKey + '\#', 'g'), this.collection[langKey]);
			}
			return content;
		},
		get: function (wat) {
			if (typeof(this.collection[wat]) !== 'undefined') {
				return this.collection[wat];
			} else {
				widjet.logger.warn('No lang string with key ' + wat);
				return '';
			}
		},

		write: function (data) {
			ipjq.getJSON(
				widjet.options.get('templatepath'),
				{},
				HTML.save
			);

			if (typeof(data.LANG) === 'undefined') {
				var sign = 'Unable to load land-file : ';
				if (typeof(data.error) !== 'undefined') {
					for (var i in data.error) {
						sign += data.error[i] + ", ";
					}
					sign = sign.substr(0, sign.length - 2);
				} else {
					sign += 'unknown error.'
				}
				widjet.logger.error(sign);
			}
			else {
				LANG.collection = widjet.service.cloneObj(data.LANG);
				loaders.onLANGLoad();
			}
		}
	};

	var makeid = function () {
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		for (var i = 0; i < 5; i++)
			text += possible.charAt(Math.floor(Math.random() * possible.length));

		return text;
	};

	var IDS = {
		WID: makeid() + '_',
		options: {
			'MAP': 'SDEK_map',
			'PRELOADER': 'preloader',
		},
		replaceAll: function (content) {

			for (optKey in this.options) {
				content = content.replace(new RegExp("\#" + optKey + "\#", 'g'), this.WID + this.options[optKey].replace('#', ''));
			}

			return content.replace(new RegExp("\#WID\#", 'g'), this.WID);
		},
		get: function (wat) {
			if (typeof(this.options[wat]) !== 'undefined') {
				return '#' + this.WID + this.options[wat];
			} else {
				return '#' + this.WID + wat;
			}
		}
	};

	var template = {
		readyA: false,
		html: {
			get: function () {

				return HTML.getBlock('widget', {
					'CITY': widjet.options.get('defaultCity')
				});
			},

			makeADAPT: function () {
				if (widjet.options.get('link')) {
					return;
				}
				var moduleH = ipjq(IDS.get('cdek_widget_cnt')).outerHeight();
				if (moduleH < 476) {
				} else {
					ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__search-list__box, .mCustomScrollBox').css('max-height', 'auto');
				}

				if (moduleH < ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__delivery-type__box').outerHeight() + 56) {
					ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__delivery-type').css('max-height', (moduleH - 56) + 'px');
				} else {
					let maxHeight = ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__delivery-type__box').outerHeight();
					if (maxHeight !== 0) {
						ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__delivery-type').css('max-height', ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__delivery-type__box').outerHeight() + 'px');
					}
				}
			},
			makeFULLSCREEN: function () {

				this.makeADAPT();
				ipjq(window).resize(this.makeADAPT());
			},
			place: function () {
				var html = this.get();

				if (widjet.options.get('link')) {
					ipjq('#' + widjet.options.get('link')).html(html);
				} else if (widjet.options.get('popup')) {
					widjet.popupped = true;
					html = HTML.getBlock('popup', {WIDGET: html});
					ipjq('body').append(html);
					this.makeFULLSCREEN();
				} else {
					html = ipjq(html);
					html.css('position', 'fixed');
					html.css('top', 0);
					html.css('left', 0);
					html.css('z-index', 1000);
					ipjq('body').append(html);
					this.makeFULLSCREEN();

				}
				if (!widjet.options.get('choose')) {
					ipjq(IDS.get('cdek_widget_cnt')).addClass('nochoose');
				}
				var htmlka = HTML.getBlock('sidebar');

                if (widjet.options.get('hidecash')) {
                    var temp = [];
                    temp.push(htmlka.slice(0, 1476));
                    temp.push(htmlka.slice(2693));
                    htmlka = temp.join("");
                }


                if (widjet.options.get('hidedress')) {
                    var temp = [];
                    temp.push(htmlka.slice(0, ( widjet.options.get('hidecash') ? 1476 : 2693)));
                    temp.push(htmlka.slice(htmlka.indexOf('<hr>')));
                    htmlka = temp.join("");
                }
                if (widjet.options.get('hidedelt')) {
                    ipjq(IDS.get('cdek_delivery_types')).hide();
                }
                ipjq(IDS.get('sidebar')).html(htmlka);

				this.makeADAPT();
			},
			loadedCities: [],
			setDefaultCities() {
				const list = ipjq(IDS.get('city_list'));
				list.empty();

				const citiesToShow = this.loadedCities.slice(0, 7);
				citiesToShow.forEach(el => {
					const _block = HTML.getBlock('city', el);
					list.prepend(_block)
				})
			},

			loadCityList: function (data) {
				this.loadedCities = []

				for (const i in data) {
					this.loadedCities.push({
						'CITYID': i,
						'CITYNAME': data[i],
						'CITY_DETAILS': (typeof DATA.regions.collection[i] != 'undefined') ? DATA.regions.collection[i] : '&nbsp;'
					})
				}

				this.setDefaultCities()
			},

			updatePrices: function (obPrices) {
				ipjq(IDS.get('cdek_widget_cnt')).find(IDS.get('cdek_delivery_types') + " div.CDEK-widget__delivery-type__item").remove();

				if (typeof obPrices == 'undefined' || obPrices.length == 0) {
                    ipjq(IDS.get('cdek_widget_cnt')).find(IDS.get('cdek_delivery_type_title span.CDEK_choose')).hide();
                    ipjq(IDS.get('cdek_widget_cnt')).find(IDS.get('cdek_delivery_type_title span.CDEK_no-avail')).show();
                    ipjq(IDS.get('cdek_widget_cnt')).find(IDS.get('cdek_delivery_type_none')).show();
				} else {
					ipjq(IDS.get('cdek_widget_cnt')).find(IDS.get('cdek_delivery_type_title span.CDEK_choose')).show();
					ipjq(IDS.get('cdek_widget_cnt')).find(IDS.get('cdek_delivery_type_title span.CDEK_no-avail')).hide();
					ipjq(IDS.get('cdek_widget_cnt')).find(IDS.get('cdek_delivery_type_none')).hide();

					for (var i in obPrices) {

						// if (obPrices[i].price === null || obPrices[i].term === null) {
						// 	continue;
						// }

						switch (i) {
							case 'courier':
                            case 'pickup':
                                if(!CALCULATION.bad || obPrices[i].price !== false) {
                                    _tmpBlock = HTML.getBlock('d_' + i, {
                                        "SUMM": obPrices[i].price === null ? LANG.get('COUNTING') : obPrices[i].price,
                                        "CURR": obPrices[i].price === null ? '' : LANG.get(obPrices[i].currency),
                                        "TIME": obPrices[i].term === null ? '' : obPrices[i].term,
                                        "DAY": obPrices[i].term === null ? '' : LANG.get('DAY')
                                    });

                                    ipjq(IDS.get('cdek_delivery_types')).append(_tmpBlock);
                                }
						}
					}

				}
				this.makeADAPT();
			},

			hideMap: function () {
				ipjq(IDS.get('MAP')).css('display', 'none');
				ipjq(IDS.get('cdek_widget_cnt')).find('#SDEK_info').css('display', 'none');
			},
		},

		controller: {
			getCity: function () {
				return DATA.city.get();
			},
			loadCity: function (doLoad) {

				ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__panel-details__back').click();
				if (typeof(doLoad) === 'undefined' || doLoad != true) {
					this.calculate();
				}
				this.updatePrices();

				template.ymaps.init(DATA.city.current);

			},

			selectCity: function (city) {
				if (typeof (city) === 'object') {
					city = city.data.name;
				}
				if (typeof city === 'undefined' || !city) {
					city = ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__search-list ul li').not('.no-active').first().data('cityid');
				}

				DATA.city.set(city);
				template.controller.loadCity();

				ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__search-box input[type=text]').val(DATA.city.getName(city));
				ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__search-list ul li').removeClass('focus').addClass('no-active').parent('ul').removeClass('open');
				ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__search-box input[type=text]')[0].blur();
				ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__delivery-type__button').attr('class', 'CDEK-widget__delivery-type__button');
				ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__delivery-type__item').removeClass('active');
				setTimeout(function () {
					ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__delivery-type').removeClass('CDEK-widget__delivery-type_close');
				}, 1000);
				if(template.ui.addressSearch.ifOn()){
					template.ui.addressSearch.hide();
				}
			},
			putCity: function (city) {
				if (typeof (city) === 'object') {
					city = city.data.name;
				}

				ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__search-box input[type=text]').val(DATA.city.getName(city));
				ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__search-list ul li').removeClass('focus').addClass('no-active').parent('ul').removeClass('open');


			},
			updatePrices: function () {
				template.html.updatePrices({
					courier: CALCULATION.profiles.courier,
					pickup: CALCULATION.profiles.pickup
				});
			},

			calculate: function (forse=false) {

				CALCULATION.calculate(forse);
			},

            chooseDeliveryType : function () {
                if(template.ui.addressSearch.ifOn()){
					template.ui.addressSearch.hide();
                }

                if (ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__search-list ul').hasClass('open')) {
                    var $liFocus = ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__search-list ul').find('li.focus');
                    if ($liFocus.length != 0) {
                        template.controller.selectCity($liFocus.find('.CDEK-widget__search-list__city-name').text());
                    } else {
                        template.controller.selectCity();
                    }

                    setTimeout(function () {
                        ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__delivery-type').removeClass('CDEK-widget__delivery-type_close');

                    }, 1000);
                    return
                }

                ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__delivery-type').removeClass('CDEK-widget__delivery-type_close');
            },

			choosePVZ: function (id) {
                var qq= ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__delivery-type__item:last');
				if (!qq.hasClass('active')) {
                    qq.attr('class', 'CDEK-widget__delivery-type__item').addClass('active');
                    ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__delivery-type__item:first').attr('class', 'CDEK-widget__delivery-type__item').removeClass('active');
                    ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__delivery-type__button').attr('class', 'CDEK-widget__delivery-type__button').addClass('CDEK-widget__delivery-type__button_pvz');
                }
				var PVZ = DATA.PVZ.getCurrent();

				widjet.binders.trigger('onChoose', {
					'id': id,
					'PVZ': PVZ[id],
					'price': CALCULATION.profiles.pickup.price,
					'currency': CALCULATION.profiles.pickup.currency,
					'term': CALCULATION.profiles.pickup.term,
					'tarif': CALCULATION.profiles.pickup.tarif,
					'city': DATA.city.current,
                    'cityName': DATA.city.getName(DATA.city.current)
				});
				if (!widjet.options.get('link')) {
					this.close();
				}
			},
			chooseCOURIER: function () {
				widjet.binders.trigger('onChooseProfile', {
					'id': 'courier',
					'city': DATA.city.current,
                    'cityName': DATA.city.getName(DATA.city.current),
					'price': CALCULATION.profiles.courier.price,
					'currency': CALCULATION.profiles.courier.currency,
					'term': CALCULATION.profiles.courier.term,
					'tarif': CALCULATION.profiles.courier.tarif
				});

				if (!template.ui.active && !widjet.options.get('link')) {
					this.close();
				} else {
					if(template.ui.addressSearch.ifOn()) {
						template.ui.addressSearch.show();
						template.ui.addressSearch.fill();
					}
				}
			},

			open: function () {
				if (widjet.options.get('link')) {
					widjet.logger.error('This widjet is in non-floating mode - link is set');
				} else {
					template.ui.open();
				}
			},

			close: function () {
				if (widjet.options.get('link')) {
					widjet.logger.error('This widjet is in non-floating mode - link is set');
				} else {
					template.ui.close();
				}
			}
		},

		ui: {
			currentmark: false,

			markChozenPVZ: function (event) {
				template.ymaps.selectMark(event.data.id);
			},

			choosePVZ: function (event) {
				template.controller.choosePVZ(event.data.id);
			},

			addressSearch : {
				active : false,

				getInput : function () {
				    return ipjq(IDS.get('cdek_courier_address_place'));
                },

				ifOn : function () {
					return (widjet.options.get('detailAddress'));
                },

				show : function () {
					template.ui.addressSearch.active = true;
                    ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__courier-address__box').removeClass('CDEK-widget__courier-address__box_close');
                },

				hide : function () {
                    template.ui.addressSearch.active = false;
                    template.ui.addressSearch.killBaloon();
                    ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__courier-address__box').addClass('CDEK-widget__courier-address__box_close');
                },

				fill: function () {
				    if(DATA.city.getName()) {
                        template.ui.addressSearch.getInput().val(DATA.city.getName(template.controller.getCity()) + ', ');
                    }

                    ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__courier-address__button').addClass('allowed');
                },

				mapClick : function (point) {
					if(template.ui.addressSearch.active && typeof(point) !== 'undefined'){
                        template.ymaps.centerAddr(point.geometry.getCoordinates());
                        template.ui.addressSearch.getInput().val(point.properties.get('text'));
                        template.ui.addressSearch.makeBaloon(point.geometry.getCoordinates(),point.properties.get('text'));
					}
                },

				search : function () {
					template.ymaps.getSearchAddress(template.ui.addressSearch.getInput().val(),template.ui.addressSearch.found);
                },

				found : function (point) {
					template.ui.addressSearch.killBaloon();
                    template.ymaps.centerAddr(point.coords);
                    template.ui.addressSearch.makeBaloon(point.coords,point.name);
                },

				baloon : false,

				makeBaloon : function (coords,text) {
                    template.ui.addressSearch.baloon = template.ymaps.makeBaloon(coords,"<div class='CDEK-widget__baloon'>"+text+'<br><button class="CDEK-widget__choose" type="button" data-label="'+LANG.get('L_CHOOSE')+'">'+LANG.get('L_CHOOSE')+'</button></div>');
                    if(template.ui.addressSearch.baloon){
                        template.ui.addressSearch.baloon.balloon.open();
                        window.setTimeout(function () {
                            ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__baloon .CDEK-widget__choose').on('click',template.ui.addressSearch.clickBaloon);
                        },500);
					}
                },

				killBaloon : function () {
					if(template.ui.addressSearch.baloon){
                        template.ymaps.killBaloon(template.ui.addressSearch.baloon);
					}
                },

                clickBaloon : function () {
					template.ui.addressSearch.killBaloon();
					template.ui.addressSearch.choose();
                },


				choose : function () {
                    DATA.address.fill(template.ui.addressSearch.getInput().val());
                    ipjq.getJSON(
                        widjet.options.get('servicepath'),
                        {isdek_action: 'getCity', address: DATA.address.get()},
                        function (data) {
							if (typeof(data.error) === 'undefined') {
								if (data.city.id === 63015) {
									data.city.id = DATA.city.get()
									data.city.city = 'Быково';
								}
                                if(DATA.city.get() == data.city.id){
                                    template.ui.addressSearch.hide();

									let address = DATA.address.get();
									let addressArray = address.split(',');
									let addressClean = (addressArray[addressArray.length - 2].trim() + ', ' + addressArray[addressArray.length - 1].trim()).trim();

                                    widjet.binders.trigger('onChooseAddress', {
                                        'id': 'courier',
                                        'city': DATA.city.current,
                                        'cityName': DATA.city.getName(DATA.city.current),
                                        'price': CALCULATION.profiles.courier.price,
                                        'currency': CALCULATION.profiles.courier.currency,
                                        'term': CALCULATION.profiles.courier.term,
                                        'tarif': CALCULATION.profiles.courier.tarif,
                                        'address' : DATA.address.get(),
										'cleanaddress': addressClean
                                    });

                                    if (!widjet.options.get('link')) {
                                        this.close();
                                    }
                                } else {

                                    DATA.city.set(data.city.id,true);
                                    ipjq(IDS.get('cdek_search_input')).val(data.city.city);
                                    template.html.updatePrices({
                                        'courier' : {price:null,term:null},
                                        'pickup'  : {price:null,term:null}
                                    });
									alert(LANG.get('ADDRESS_ANOTHER'));
                                    template.controller.calculate(true);
                                    template.controller.chooseDeliveryType();
                                }
                            } else {
								alert(LANG.get('ADDRESS_WRONG'));
                            	widjet.logger.warn("City from was't found " + data.error);
                            }
                        }
                    );
                }
			},

			open: function () {
				ipjq(IDS.get('CDEK_popup')).show();

				if (widjet.loadedToAction) {

					widjet.finalAction();

				} else {
					widjet.popupped = false;
				}
				if (template.ymaps.map !== false) {
					template.ymaps.map.container.fitToViewport();
				}
				this.active = true;
			},

			close: function () {
				this.active = false;
				ipjq(IDS.get('CDEK_popup')).hide();
			}
		},

		ymaps: {
			map: false,
			readyToBlink: false,
			linker: IDS.get('MAP').replace('#', ''),
			searchControl: null,

			init: function (city) {
				this.readyToBlink = false;

				var self = this;

                if (city == false) {
                    ymaps.geolocation.get({}).then(function (result) {
                        var gdeUser = result.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.Address.Components;
                        for (var i = gdeUser.length-1; i >= 0; i--) {
                            if (gdeUser[i].kind == 'locality') {
                                city = gdeUser[i].name;
                                city = city.replace(/город\s|поселок\sгородского\sтипа\s|поселок\s|посёлок\s|деревня\s|село\s/ig, '');
                                DATA.city.set(city);
                                if (DATA.city.current !== false) break;
                            }
                        }
                        if (DATA.city.current == false) {
                            //если город не найден - ищем ближайший по координатам ПВЗ и отображаем в этом городе
                            gdeUser = result.geoObjects.get(0).geometry._coordinates;

                            var nearestPVZ = {};
                            var delta = 100;
                            for (var pvzCity in DATA.PVZ.collection) {
                                for (var myPvz in DATA.PVZ.collection[pvzCity]) {
                                    var mpvz = DATA.PVZ.collection[pvzCity][myPvz];
                                    var deltaGeo = Math.sqrt(Math.pow(mpvz.cY-gdeUser[0],2) + Math.pow(mpvz.cX-gdeUser[1],2));
                                    if (delta > deltaGeo) {
                                    	nearestPVZ = mpvz;
                                    	delta = deltaGeo;
                                    	city = pvzCity;
                                    }
                                }
                            }

							if (city != false) {
                                DATA.city.set(city);
                                city = DATA.city.getName(city);
							}
							else {
                                DATA.city.set('Москва');
                                city = 'Москва';
                            }
                        }

                        widjet.options.set(city, 'defaultCity');
                        template.controller.calculate();
                        template.controller.updatePrices();
                        self.loadMap(DATA.city.current);
                        ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__search-box input[type=text]').val(city);

                    });
                }
                else {
                    self.loadMap(DATA.city.current);
                }
            },

            loadMap: function (city) {
                var self = this;
				city = DATA.city.getFullName(city);
				DATA.currentCityName = city;
				let mtypes = {};
				if (ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__sidebar-button-point.active').length) {

					ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__sidebar-button-point.active').each(function () {
						mtypes[ipjq(this).data('mtype')] = true;
					});
				}

				DATA.currentCityCode = 0;
				if (typeof DATA.PVZ.getCurrent() === 'object') {
					self.placeMarks(mtypes);
					return;
				}

				ymaps.geocode(city, {
					results: 1
				}).then(function (res) {
					var firstGeoObject = res.geoObjects.get(0);
					var coords = firstGeoObject.geometry.getCoordinates();
					if (!self.map) {
                        self.makeMap({center: coords});
					} else {
						self.map.setCenter(coords);
						self.map.setZoom(10);
					}

					self.placeMarks(mtypes);
				});
			},

			makeMap : function (addInfo) {
				if(typeof(addInfo) !== 'object'){
                    addInfo = {};
				}

                template.ymaps.map = new ymaps.Map(
					template.ymaps.linker,
                    widjet.service.concatObj({
                        zoom: 10,
                        controls: []
                    },addInfo)
				);

                this.map.controls.add(new ymaps.control.ZoomControl(),{
					float: 'none',
					position: {
						left   : 12,
						bottom : 70
					}
				});

                template.ymaps.map.events.add('boundschange', widjet.hideLoader);
                template.ymaps.map.events.add('actionend',    widjet.hideLoader);

                if(widjet.options.get('detailAddress')) {
                    template.ymaps.map.events.add('click', template.ymaps.getClickAddress);
                    var suggestView1 = new ymaps.SuggestView(IDS.get('cdek_courier_address_place').substr(1));
                }
            },

			addSearchBox : function () {
				if (params.searchAddressBox) {
					this.searchControl = new ymaps.control.SearchControl({
						options: {
							float: 'none',
							position: {
								left: 320,
								top: 10
							}
						}
					});

					this.map.controls.add(this.searchControl);
				}
			},

			removeSearchBox : function () {
				if (params.searchAddressBox) {
					this.map.controls.remove(this.searchControl);
				}
			},

			centerAddr : function (coords) {
                var self = this;
                self.map.setCenter(coords);
                self.map.setZoom(17);
            },

			clearMarks: function () {
				if (typeof(this.map.geoObjects.removeAll) !== 'undefined' && false)
					this.map.geoObjects.removeAll();
				else {
					do {
						var map = this.map;
						map.geoObjects.each(function (e) {
							map.geoObjects.remove(e);
						});
					} while (map.geoObjects.getBounds());
				}
			},

			placeMarks: function (mtypes) {
				DATA.currentCityCode = DATA.city.get()
				let pvzList =  DATA.PVZ.getCurrent();
				if (typeof pvzList !== 'object') {
					ipjq(IDS.get('sidebar')).hide();
				} else {
					ipjq(IDS.get('sidebar')).show();
				}

				ipjq(IDS.get('panel')).find(IDS.get('pointlist')).html('');
				ipjq(IDS.get('panel')).find(IDS.get('pointlist')).html(HTML.getBlock('panel_list'));

				_panelContent = ipjq(IDS.get('pointlist')).find('.CDEK-widget__panel-content');

				if (typeof pvzList === 'object') {
					template.ymaps.clusterer = new ymaps.Clusterer({
						gridSize: 50,
						preset: 'islands#ClusterIcons', //'#0a8c37'
						clusterIconColor: '#0a8c37',
						hasBalloon: false,
						groupByCoordinates: false,
						clusterDisableClickZoom: false,
						maxZoom: 11,
						zoomMargin: [45],
						clusterHideIconOnBalloonOpen: false,
						geoObjectHideIconOnBalloonOpen: false
					});
					geoMarks = [];
					for (var i in pvzList) {

						if (typeof mtypes != 'undefined') {
							if (typeof mtypes.dress != 'undefined' && pvzList[i].Dressing != true) {
								continue;
							}

							if (typeof mtypes.cash != 'undefined' && pvzList[i].Cash != true) {
								continue;
							}

							if (typeof mtypes.postamat != 'undefined' && pvzList[i].Postamat != true) {
								continue;
							}
						}
						let img = widjet.options.get('path') + ((pvzList[i].Postamat != true) ? 'images/sdekActive.png' : 'images/postomatActive.png');
						let imgActive = widjet.options.get('path') + ((pvzList[i].Postamat != true) ? 'images/sdekNActive.png' : 'images/postomatNActive.png');

						pvzList[i].placeMark = new ymaps.Placemark([pvzList[i].cY, pvzList[i].cX], {}, {
							iconLayout: 'default#image',
							iconImageHref: img,
							iconImageSize: [30, 40],
							iconImageOffset: [-10, -30]
						});

						geoMarks.push(pvzList[i].placeMark);
						pvzList[i].placeMark.link = i;

						pvzList[i].list_block = ipjq(HTML.getBlock('point', {
							P_NAME: pvzList[i].Name,
							P_ADDR: pvzList[i].Address,
							P_TIME: pvzList[i].WorkTime.replace(new RegExp(',', 'g'), '<br/>')
						}));

						pvzList[i].placeMark.listItem = pvzList[i].list_block;

						pvzList[i].placeMark.events.add(['balloonopen', 'click'], function (metka) {
							_prevMark = template.ui.currentmark;

							template.ui.currentmark = metka.get('target');
							if (typeof _prevMark == 'object') {
								try {
									_prevMark.events.fire('mouseleave');
								} catch (e) {

								}
							}

							ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__sidebar-burger:not(.active)').trigger('click');
							template.ui.markChozenPVZ({data: {id: metka.get('target').link, link: template.ui}});
						});

						pvzList[i].placeMark.events.add(['mouseenter'], function (metka) {
							ipjq(IDS.get('cdek_widget_cnt')).find(".CDEK-widget__panel-content").mCustomScrollbar("scrollTo", metka.get('target').listItem);
							metka.get('target').listItem.addClass('CDEK-widget__panel-list__item_active');
							metka.get('target').options.set({iconImageHref: imgActive});
						});

						pvzList[i].placeMark.events.add(['mouseleave'], function (metka) {
							if (template.ui.currentmark != metka.get('target')) {
								metka.get('target').listItem.removeClass('CDEK-widget__panel-list__item_active');
								metka.get('target').options.set({iconImageHref: img});
							}
						});
						pvzList[i].list_block.mark = pvzList[i].placeMark;
						pvzList[i].list_block.on('click', {mark: i}, function (event) {

							pvzList[event.data.mark].placeMark.events.fire('click');

						}).on('mouseenter', {
							id: i,
							ifOn: true,
							link: template.ymaps
						}, template.ymaps.blinkPVZ).on('mouseleave', {
							id: i,
							ifOn: false,
							link: template.ymaps
						}, template.ymaps.blinkPVZ);

						_panelContent.append(pvzList[i].list_block);
					}

					if (geoMarks.length > 0) {
						template.ymaps.clusterer.add(geoMarks);
						_bounds = template.ymaps.clusterer.getBounds();
						if (!this.map) {
							if (_bounds[0][0] == _bounds[1][0]) {
								this.makeMap({center: _bounds[0]});
							} else {
								this.makeMap({bounds: _bounds});
								this.map.setBounds(_bounds, {
									zoomMargin: 45,
									checkZoomRange: true,
									duration: 500
								});
							}

							template.ymaps.clearMarks();
							this.map.geoObjects.add(template.ymaps.clusterer);
							widjet.hideLoader();

						} else {
							if (_bounds[0][0] == _bounds[1][0]) {

								this.map.setCenter(_bounds[0]);
								this.map.setZoom(10);
								template.ymaps.clearMarks();
								this.map.geoObjects.add(template.ymaps.clusterer);

							} else {

								this.map.setBounds(template.ymaps.clusterer.getBounds(), {
									zoomMargin: 45, checkZoomRange: true, duration: 500
								}).then(
									function () {
										template.ymaps.clearMarks();
										this.map.geoObjects.add(template.ymaps.clusterer);
										if (this.map.getZoom() > 12) {
											this.map.setZoom(12);
										}
									},
									function () {
										template.ymaps.clearMarks();
										this.map.geoObjects.add(template.ymaps.clusterer);
										if (this.map.getZoom() > 12) {
											this.map.setZoom(12);
										}
									},
									this
								);
							}

						}

					} else {
						template.ymaps.clearMarks();
						widjet.hideLoader();
					}
				}
				ipjq(IDS.get('cdek_widget_cnt')).find(".CDEK-widget__panel-content").mCustomScrollbar();
				ipjq(IDS.get('cdek_widget_cnt')).find(".CDEK-widget__delivery-type").mCustomScrollbar();

				this.readyToBlink = true;
			},
			makeUpCenter: function (cords) {
				var projection = this.map.options.get('projection');
				cords = this.map.converter.globalToPage(
					projection.toGlobalPixels(
						cords,
						this.map.getZoom()
					)
				);
				ww = ipjq(IDS.get('panel')).width();

				if (ipjq(IDS.get('cdek_widget_cnt')).width() - ww > 100) {
					cords[0] = cords[0] + ww / 2;
				}

				cords = projection.fromGlobalPixels(
					this.map.converter.pageToGlobal(cords), this.map.getZoom()
				);

				return cords;
			},

			selectMark: function (wat) {
				var cityPvz = DATA.PVZ.getCurrent();

				if (parseInt(DATA.city.current) !== parseInt(cityPvz[wat].CityCode)) {
					DATA.city.set(parseInt(cityPvz[wat].CityCode));
					city = DATA.city.getName(cityPvz[wat].CityCode);
					ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__search-box input[type=text]').val(city);
					CALCULATION.calculate();
					template.controller.updatePrices();
				} else if (parseInt(DATA.city.current) === 44) {
					CALCULATION.calculate();
					template.controller.updatePrices();
				}

				this.map.setCenter(template.ymaps.makeUpCenter([cityPvz[wat].cY, cityPvz[wat].cX]));

				_detailPanel = ipjq(IDS.get('panel')).find(IDS.get('detail_panel'));
				_detailPanel.html('');

				_photoHTML = '';
				if (typeof cityPvz[wat].Picture != 'undefined') {
					for (_imgIndex in  cityPvz[wat].Picture) {
						_photoHTML += HTML.getBlock('image_c', {D_PHOTO: cityPvz[wat].Picture[_imgIndex]});
					}
				}

				_block = ipjq(HTML.getBlock('panel_details', paramsD = {
					D_NAME: cityPvz[wat].Name,
					D_ADDR: cityPvz[wat].Address,
					D_TIME: cityPvz[wat].WorkTime.replace(new RegExp(',', 'g'), '<br/>'),
					D_WAY: cityPvz[wat].AddressComment.search('http') == -1 ? cityPvz[wat].AddressComment : '',
					D_IMGS: _photoHTML,
				}));

				if (paramsD.D_WAY == '') {
					_block.find('.CDEK-widget__way').remove();
				}

				if (paramsD.D_IMGS == '') {
					_block.find('.sdek_image_block').remove();
				}

				_block.find(IDS.get('choose_button')).on('click', {id: wat}, function (event) {
					template.controller.choosePVZ(event.data.id);
				});

				_detailPanel.html(_block);
				_detailPanel.find('.CDEK-widget__panel-content').mCustomScrollbar();
				ipjq(IDS.get('cdek_widget_cnt')).find(".CDEK-widget__panel-list").css('left', '-330px');
				ipjq(IDS.get('cdek_widget_cnt')).find(".CDEK-widget__panel-details").css('right', '0px');
			},

			blinkPVZ: function (event) {

				if (event.data.link.readyToBlink) {
					var cityPvz = DATA.PVZ.getCurrent();
					if (template.ui.currentmark == cityPvz[event.data.id].placeMark) {
						return;
					}
					if (event.data.ifOn) {
						event.data.link.clusterer.remove(cityPvz[event.data.id].placeMark);
						event.data.link.map.geoObjects.add(cityPvz[event.data.id].placeMark);
						cityPvz[event.data.id].placeMark.options.set({iconImageHref: widjet.options.get('path') + "images/sdekActive.png"});
					} else {
						cityPvz[event.data.id].placeMark.options.set({iconImageHref: widjet.options.get('path') + "images/sdekNActive.png"});
						event.data.link.map.geoObjects.remove(cityPvz[event.data.id].placeMark);
						event.data.link.clusterer.add(cityPvz[event.data.id].placeMark);
					}

				}
			},

			getClickAddress : function (e) {
                ymaps.geocode(
                	e.get('coords'),
					{kind : 'house'}
				).then(function (res) {
					template.ui.addressSearch.mapClick(res.geoObjects.get(0));
                });
            },

			getSearchAddress : function (string,callback) {
				let country = widjet.options.get('country');
				if (country) {
					string = country + ', ' + string;
				}

                ymaps.geocode(string, {
                    kind : 'house'
                }).then(function (res) {
                    var info = res.geoObjects.get(0);
                    var obReturn = {
                        name   : info.properties.get('name'),
                        descr  : info.properties.get('description'),
                        coords : info.geometry.getCoordinates()
					};

                    if(typeof(callback) !== 'undefined'){
                        callback(obReturn);
                    }

                    return obReturn;
                });
            },

			makeBaloon : function (coords,html) {
                var bln = new ymaps.Placemark(coords,{
                    balloonContent: html
                }, {
                    balloonCloseButton: false,
                    iconLayout: 'default#image',
                    //iconImageHref: '/bitrix/images/ipol.sdek/widjet/sdekNActive.png',
                    //iconImageSize: [40, 43],
                    //iconImageOffset: [-10, -31]
                });
                template.ymaps.map.geoObjects.add(bln);
                return bln;
            },

			killBaloon : function (wat) {
				template.ymaps.map.geoObjects.remove(wat);
            }
		}
	};

	widjet.binders.add(template.controller.updatePrices, 'onCalculate');

	widjet.sdekSetPVZS = function (mtypes) {
		template.ymaps.clearMarks();
		if (typeof mtypes !== 'undefined') {
			template.ymaps.placeMarks(mtypes);
			return;
		}
		template.ymaps.placeMarks();
	};
	widjet.chooseCourier = function () {
		template.controller.chooseCOURIER();
	};

	widjet.sdekWidgetEvents = function () {
		ipjq('.CDEK-widget__popup__close-btn').off('click').on('click', function () {
			ipjq(this).closest('.CDEK-widget__popup-mask').hide();
		});

		ipjq(IDS.get('cdek_widget_cnt')).on('click', '.CDEK-widget__sidebar-button', {widjet: widjet}, function () {

			_this = ipjq(this);
			_this.toggleClass('active');
			var idHint = _this.attr('data-hint');
			var wid = ipjq(IDS.get('cdek_widget_cnt')).find(idHint).outerWidth();

			if (_this.hasClass('CDEK-widget__sidebar-button-point')) {

				if (ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__sidebar-button-point.active').length) {
					var mtypes = {};
					ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__sidebar-button-point.active').each(function () {
						mtypes[ipjq(this).data('mtype')] = true;
					});
					widjet.sdekSetPVZS(mtypes);
				} else {
					widjet.sdekSetPVZS();
				}

			} else {

				ipjq(IDS.get('cdek_widget_cnt')).find(idHint).css({
					right: -wid,
					'opacity': '0'
				});

				if (_this.hasClass('CDEK-widget__sidebar-burger')) {
					if (_this.hasClass('close')) {
						_this.removeClass('close');
					}

					_this.toggleClass('open');
					if (!_this.hasClass('open')) {
						_this.addClass('close');
					}

					if (ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__panel').hasClass('open')) {
						if (_this.hasClass('active')) {
							ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__panel-contacts').fadeOut(600);
							ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__panel-list, .CDEK-widget__panel-details').fadeIn(600);
							ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__sidebar-button_phone').removeClass('active');
						} else {
							ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__panel-list, .CDEK-widget__panel-details').fadeOut(600);
							ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__panel').removeClass('open');
						}
					} else {
						ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__panel').addClass('open');
						ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__panel-list, .CDEK-widget__panel-details').fadeIn(600);
					}
				}

				if (_this.hasClass('CDEK-widget__sidebar-button_phone')) {
					if (ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__panel').hasClass('open')) {
						if (_this.hasClass('active')) {
							ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__panel-list, .CDEK-widget__panel-details').fadeOut(600);
							ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__panel-contacts').fadeIn(600);
							ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__sidebar-burger').removeClass('active').removeClass('open').addClass('close');
						} else {
							ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__panel-contacts').fadeOut(600);
							ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__panel').removeClass('open');
						}
					} else {
						ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__panel').addClass('open');
						ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__panel-contacts').fadeIn(600);
					}
				}
			}
		}).on('click', '.CDEK-widget__choose', function () {
			ipjq(this).addClass('widget__loading');
		});
		ipjq(IDS.get('cdek_widget_cnt')).on('mousemove', '.CDEK-widget__sidebar-button', function () {
			if (!ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__panel').hasClass('open')) {
				var idHint = ipjq(this).attr('data-hint');
				ipjq(IDS.get('cdek_widget_cnt')).find(idHint).css({
					right: '67px',
					'opacity': '1'
				});
			}
		}).on('mouseleave', '.CDEK-widget__sidebar-button', function () {
			var idHint = ipjq(this).attr('data-hint');
			var wid = ipjq(IDS.get('cdek_widget_cnt')).find(idHint).outerWidth();
			ipjq(IDS.get('cdek_widget_cnt')).find(idHint).css({
				right: -wid,
				'opacity': '0'
			});
		}).on('hover', '.CDEK-widget__panel-headline', function () {
			if (ipjq(this).outerWidth() <= ipjq(this).find('span').outerWidth()) {
				ipjq(this).addClass('hover-long');
			}

		}, function () {
			if (ipjq(this).hasClass('hover-long')) {
				ipjq(this).removeClass('hover-long')
			}
		});

		ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__sidebar-button').each(function (index, el) {
			var idHint = ipjq(el).attr('data-hint');
			var top = (ipjq(el).outerHeight() + -ipjq(IDS.get('cdek_widget_cnt')).find(idHint).outerHeight()) / 2 + 62 * index;
			var wid = ipjq(IDS.get('cdek_widget_cnt')).find(idHint).outerWidth();
			ipjq(IDS.get('cdek_widget_cnt')).find(idHint).css({
				'right': -wid,
				'top': top,
				'opacity': '0'
			});
		});

		ipjq(IDS.get('cdek_widget_cnt'))
		.on('click', '.CDEK-widget__panel-details__back', function () {
			ipjq(this).parents('.CDEK-widget__panel-details').css('right', '-330px');
			ipjq(IDS.get('cdek_widget_cnt')).find(".CDEK-widget__panel-list").css('left', '0px');
		}).on('click', '.CDEK-widget__panel-details__block-img', function () {
			var src = ipjq(this).find('img').attr('src');
			var $block = ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__photo');
			$block.find('img').attr('src', src);
			$block.addClass('active');
		}).on('click', '.CDEK-widget__photo', function (e) {
			if (!ipjq(e.target).is('img')) {
				ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__photo').removeClass('active');
			}
		}).on('focusin', '.CDEK-widget__search-box input[type=text]', function () {
			ipjq(this).val('');
			template.html.setDefaultCities()

			if (ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__delivery-type').hasClass('CDEK-widget__delivery-type_close')) {
				ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__search-list ul').addClass('open')
					.find('li').removeClass('no-active');

				return
			}

			ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__delivery-type').addClass('CDEK-widget__delivery-type_close');
			setTimeout(function () {
				ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__search-list ul').addClass('open')
					.find('li').removeClass('no-active');
			}, 1000);
		}).on('click', '.CDEK-widget__search-list ul li', function () {
			template.ymaps.removeSearchBox();
			template.controller.selectCity(ipjq(this).data('cityid'));
		}).on('keydown', '.CDEK-widget__search-box input[type=text]', function (e) {
			var $liActive = ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__search-list ul li:not(.no-active)');
			var $liFocus = $liActive.filter('.focus');

			if (e.keyCode === 40) {
				if ($liFocus.length == 0) {
					$liActive.first().addClass('focus');
				} else {
					$liFocus.removeClass('focus');

					if ($liFocus.nextAll().filter(':not(.no-active)').eq(0).length != 0) {
						$liFocus.nextAll().filter(':not(.no-active)').eq(0).addClass('focus');
					} else {
						$liActive.first().addClass('focus');
					}
				}
			}
			if (e.keyCode === 38) {
				if ($liFocus.length == 0) {
					$liActive.last().addClass('focus');
				} else {
					$liFocus.removeClass('focus');

					if ($liFocus.prevAll().filter(':not(.no-active)').eq(0).length != 0) {
						$liFocus.prevAll().filter(':not(.no-active)').eq(0).addClass('focus');
					} else {
						$liActive.last().addClass('focus');
					}
				}
			}
		}).on('keyup', '.CDEK-widget__search-box input[type=text]', function (e) {
			const currentValue = ipjq(this).val();
			let filter

			try {
				filter = new RegExp('^(' + currentValue + ')+.*', 'i');
			} catch (e) {
				filter = '';
			}

			var $li = ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__search-list ul li');
			const $ul = ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__search-list ul');

			if (e.keyCode === 13) {
				var $liActive = $li.not('.no-active');
				var $liFocus = $liActive.filter('.focus');

				if ($liFocus.length == 0) {
					template.controller.selectCity();
				} else {
					template.controller.selectCity($liFocus.find('.CDEK-widget__search-list__city-name').text());
					$liFocus.removeClass('focus');
				}
				if (DATA.city.getName(DATA.city.current) != ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__search-box input[type=text]').val()) {
					type = 'courier';
					setTimeout(function () {
						ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__delivery-type').addClass('CDEK-widget__delivery-type_close');
					}, 1001);
					widjet.chooseCourier();
				}
				return
			}

			if (filter !== '') {
				const oldIds = []
				// keyDown 	событие может добавить класс focus элементу
				// но keyUp тут же удаляет старые дом элементы и создает новые
				// Проверка на совпадение массивов для отрисовки нужна чтобы лишний раз не
				// перерисовывать список городов
				$ul.children().each((i, el) => {
					oldIds.push(el.getAttribute('data-cityid'))
				})

				const citiesToShow = template.html.loadedCities.filter((el) => filter.test(el['CITYNAME'].replace(/[^\wа-яё\s-]+/gi, ""))).slice(0, 7);
				const currentIds = citiesToShow.map((el) => el['CITYID'])


				if (citiesToShow.length === 0) {
					$ul.removeClass('open');
				} else if (!$ul.hasClass('open')) {
					$ul.addClass('open');
				}

				if (oldIds.length === currentIds.length) {
					if (oldIds.sort().toString() === currentIds.sort().toString()) {
						return;
					}
				}

				$ul.empty()

				citiesToShow.forEach((el, idx) => {
					const _block = HTML.getBlock('city', el);
					const li = ipjq(_block)
					li.removeClass('no-active');
					$ul.prepend(li)
				})
			} else {
				$li.removeClass('no-active');
			}
		}).on('click', function (e) {
			if (ipjq(e.target).closest('.CDEK-widget__search').length == 0 && ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__search-list ul li').not('.no-active').length != 0) {
				template.controller.putCity(template.controller.getCity());
			}
		}).on('click', '.CDEK-widget__delivery-type__item', {widjet: widjet}, function (e) {
            var type = ipjq(this).attr('data-delivery-type');

			if (type === 'pvz') {
				template.ymaps.addSearchBox();
			}

			if (!ipjq(this).hasClass('active')) {
				ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__delivery-type__item.active').removeClass('active');
				ipjq(this).addClass('active');
				ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__delivery-type__button').attr('class', 'CDEK-widget__delivery-type__button').addClass('CDEK-widget__delivery-type__button_' + type);
			}
            if (type == 'courier') {
                e.data.widjet.chooseCourier();
            }

			ipjq(this).parents('.CDEK-widget__delivery-type').addClass('CDEK-widget__delivery-type_close');
		}).on('click', '.CDEK-widget__delivery-type__button', function () {
			template.ymaps.removeSearchBox();
			template.controller.chooseDeliveryType();
			if (DATA.city.getName(DATA.city.current) != ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__search-box input[type=text]').val()) {
				type = 'courier';
				setTimeout(function () {
					ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__delivery-type').addClass('CDEK-widget__delivery-type_close');
				}, 1001);
				widjet.chooseCourier();
			}
		}).on('click','.CDEK-widget__courier-address__button',function(){
            template.ui.addressSearch.search();
		});
	};

	widjet.city = {
		get: function () {
			return DATA.city.current
		},
		set: function (name) {

			let newCity = DATA.city.set(name);
			if (newCity !== false) {
				ipjq(IDS.get('cdek_widget_cnt')).find('.CDEK-widget__search-box input[type=text]').val(DATA.city.getName(newCity));
			}
			template.controller.loadCity();
		},
		check: function (name) {
			return DATA.city.getId(name);
		}
	};

	widjet.PVZ = {
		get: function (cityName) {
			return DATA.PVZ.getCityPVZ(cityName);
		},
		check: function (cityName) {
			return DATA.PVZ.check(cityName);
		}
	};

	widjet.cargo = {
		add: function (item) {
			cargo.add(item);
		},
		reset: function () {
			cargo.reset();
		},
		get: function () {
			return cargo.get()
		}
	};

	widjet.calculate = function () {
		CALCULATION.calculate();
		return CALCULATION.profiles;
	};

	if (!widjet.options.get('link')) {
		widjet.open = function () {
			template.controller.open();
		};
		widjet.close = function () {
			template.controller.close();
		};
	}

	return widjet;
}
