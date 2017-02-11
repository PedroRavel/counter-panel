'use strict';

System.register(['moment', 'jquery', 'lodash', 'jquery.flot', 'jquery.flot.gauge', 'jquery.flot.pie', 'app/core/utils/kbn', 'app/core/config', 'app/core/time_series2', 'app/plugins/sdk'], function (_export, _context) {
  "use strict";

  var moment, $, _, kbn, config, TimeSeries, MetricsPanelCtrl, _createClass, CounterCtrl;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_moment) {
      moment = _moment.default;
    }, function (_jquery) {
      $ = _jquery.default;
    }, function (_lodash) {
      _ = _lodash.default;
    }, function (_jqueryFlot) {}, function (_jqueryFlotGauge) {}, function (_jqueryFlotPie) {}, function (_appCoreUtilsKbn) {
      kbn = _appCoreUtilsKbn.default;
    }, function (_appCoreConfig) {
      config = _appCoreConfig.default;
    }, function (_appCoreTime_series) {
      TimeSeries = _appCoreTime_series.default;
    }, function (_appPluginsSdk) {
      MetricsPanelCtrl = _appPluginsSdk.MetricsPanelCtrl;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export('CounterCtrl', CounterCtrl = function (_MetricsPanelCtrl) {
        _inherits(CounterCtrl, _MetricsPanelCtrl);

        function CounterCtrl($scope, $injector) {
          var _grid;

          _classCallCheck(this, CounterCtrl);

          var _this = _possibleConstructorReturn(this, (CounterCtrl.__proto__ || Object.getPrototypeOf(CounterCtrl)).call(this, $scope, $injector));

          var panelDefaults = {
            legend: {
              show: true, // disable/enable legend
              values: true
            },
            prefix: '',
            postfix: '',
            values: {
              current: 0,
              next: 0,
              sum: 0,
              count: 0,
              showValue: true,
              showNext: false,
              showSum: false
            },
            showGraph: true,
            fontSize: '25px',
            fontWeight: '10px',
            font: { family: '"Helvetica Neue", Helvetica, Arial, sans-serif' },
            bgColor: null,
            data: [{
              label: '',
              data: [[0, 0]],
              color: 'red'
            }],
            dataPlus: [{
              label: '',
              color: 'red',
              data: [[0, 0]]

            }],
            hData: [{
              label: '',
              data: [[0, 0]],
              color: 'red'
            }],
            pieData: [{ label: '', data: 0, color: 'red' }, { label: '', data: 0, color: 'grey' }],
            graphChoice: 'bar',
            graphWidth: 300,
            graphHeight: 200,
            barColor: 'red',
            graphOptions: {},
            chartData: {},
            opacity: false,
            barOptions: {
              yaxis: {
                min: 0,
                max: 0,
                show: false

              },
              xaxis: {
                show: false
              },
              grid: (_grid = {
                show: true,
                label: false
              }, _defineProperty(_grid, 'label', {
                show: false
              }), _defineProperty(_grid, 'labels', false), _defineProperty(_grid, 'labels', {
                show: false
              }), _grid),
              border: {
                show: true
              },
              series: {
                bars: {
                  fill: 0.3,
                  show: true
                }
              }
            },
            barPlusOptions: {
              bars: {
                //fill:0.3,
                show: true,
                barWidth: 0.13,
                order: 1
              },
              xaxis: {
                show: true,
                tickLength: 5
              },
              yaxis: {
                show: true,
                tickLength: 5
              },
              legend: {
                show: true
              },
              grid: {
                showGrid: true,
                borderWidth: 0
              },
              border: {
                show: false
              }
            },
            horizontalOptions: {
              xaxis: {
                min: 0,
                max: 0,
                show: false
              }, yaxis: {
                show: false
              },
              grid: {
                show: true
              },
              border: {
                show: true
              },
              series: {
                bars: {
                  fill: 0.3,
                  show: true,
                  horizontal: true
                }
              }
            },
            pieOptions: {
              pie: {
                show: true
              }
            },
            doughnutOptions: {
              doughnut: {
                //innerRadius:0.6,
                show: true
              }
            },
            options: {
              series: {
                grow: {
                  active: true,
                  duration: 150
                },
                gauges: {
                  gauge: {
                    min: 0,
                    max: 0,
                    background: { color: 'grey' },
                    border: { color: null },
                    shadow: { show: false },
                    font: { size: 0, family: '"Helvetica Neue", Helvetica, Arial, sans-serif' },
                    thresholdMarkers: false,
                    thresholdLabels: false,
                    width: 25
                  },
                  threshold: {
                    label: {
                      show: false,
                      margin: 0,
                      font: { size: 15 }
                    },
                    show: true,
                    width: 0,
                    barColor: 'red',
                    setColor: function setColor() {
                      var colors = this;
                      colors.values.forEach(function (value) {
                        value.color = colors.barColor;
                      });
                    },
                    values: [{
                      value: 0,
                      color: 'red'
                    }, {
                      value: 50,
                      color: 'red'
                    }, {
                      value: 100,
                      color: 'red'
                    }]
                  },
                  show: true,
                  frame: { show: false },
                  label: { show: false },
                  layout: { margin: 8, thresholdWidth: 0 },
                  cell: { border: { width: 0 } },
                  value: {
                    show: false,
                    font: { size: 15, family: '"Helvetica Neue", Helvetica, Arial, sans-serif' }
                  }
                }
              }
            },
            text: {
              title: '',
              prefix: '',
              postfix: ''
            },
            gauge: {
              value: false,
              threshold: false
            }
          };
          _.defaults(_this.panel, panelDefaults);
          _.defaults(_this.panel.legend, panelDefaults.legend);
          _this.events.on('init-edit-mode', _this.onInitEditMode.bind(_this));
          _this.events.on('data-received', _this.onDataReceived.bind(_this));
          _this.events.on('data-snapshot-load', _this.onDataReceived.bind(_this));
          _this.events.on('panel-initialized', _this.render.bind(_this));
          _this.events.on('panel-teardown', _this.onPanelTeardown.bind(_this));
          _this.delta = 1000;
          _this.rRate = 'off';
          _this.increment;
          _this.chooseGraph(_this.panel.graphChoice);

          return _this;
        }

        _createClass(CounterCtrl, [{
          key: 'onInitEditMode',
          value: function onInitEditMode() {
            this.addEditorTab('Options', 'public/plugins/grafana-counter-panel/editor.html', 2);
          }
        }, {
          key: 'updateCounter',
          value: function updateCounter(elem) {
            var _this2 = this;

            var $placeHolder = elem.find('#placeholder');
            //sets values of counter to numbers between previous sum and previous sum plus next query
            if (this.rRate !== 'off') {
              if (this.panel.values.current < this.panel.values.sum) {
                this.panel.values.current += this.increment;
                this.panel.values.count = this.panel.values.current;
                this.panel.data[0].data[0][1] = this.panel.values.count;
                this.panel.hData[0].data[0][0] = this.panel.values.count;
                this.panel.pieData[0].data += this.increment;
                this.panel.pieData[1].data -= this.increment;
              }
            } else {
              this.delta = 1000;
            }
            $placeHolder.empty();
            $placeHolder.height(this.panel.graphHeight).plot(this.panel.chartData, this.panel.graphOptions);

            this.nextTickPromise = this.$timeout(function () {
              _this2.updateCounter(elem);
            }, this.delta);
          }
        }, {
          key: 'onPanelTeardown',
          value: function onPanelTeardown() {
            this.$timeout.cancel(this.nextTickPromise);
          }
        }, {
          key: 'onDataReceived',
          value: function onDataReceived(dataList) {
            this.series = dataList.map(this.seriesHandler.bind(this));
            this.setRefreshRate(this.timeSrv.dashboard.refresh);
            this.setValues();
            this.render();
          }
        }, {
          key: 'seriesHandler',
          value: function seriesHandler(seriesData) {
            var series = new TimeSeries({
              datapoints: seriesData.datapoints,
              alias: seriesData.target
            });
            series.flotpairs = series.getFlotPairs(this.panel.nullPointMode);

            return series;
          }
        }, {
          key: 'changeColor',
          value: function changeColor(color) {
            this.panel.data[0].color = color;
            this.panel.hData[0].color = color;
            this.panel.dataPlus[0].color = color;
            this.panel.pieData[0].color = color;
            this.panel.options.series.gauges.threshold.values.forEach(function (value) {
              value.color = color;
            });
            this.render();
          }
        }, {
          key: 'setBarOpacity',
          value: function setBarOpacity() {
            if (this.panel.opacity) {
              this.panel.barOptions.series.bars.fill = 1;
              this.panel.barPlusOptions.series.bars.fill = 1;
              this.panel.horizontalOptions.series.bars.fill = 1;
            } else {
              this.panel.horizontalOptions.series.bars.fill = 0.3;
              this.panel.barPlusOptions.series.bars.fill = 0.3;
              this.panel.barOptions.series.bars.fill = 0.3;
            }
            this.render();
          }
        }, {
          key: 'chooseGraph',
          value: function chooseGraph(choice) {

            this.panel.graphChoice = choice;

            if (this.panel.graphChoice === 'bar') {
              this.panel.graphOptions = this.panel.barOptions;
              this.panel.chartData = this.panel.data;
            } else if (this.panel.graphChoice === 'hbar') {
              this.panel.graphOptions = this.panel.horizontalOptions;
              this.panel.chartData = this.panel.hData;
            } else if (this.panel.graphChoice === 'pie') {
              this.panel.graphOptions = { series: this.panel.pieOptions };
              this.panel.chartData = this.panel.pieData;
            } else if (this.panel.graphChoice === 'barPlus') {
              this.panel.graphOptions = this.panel.barPlusOptions;
              this.panel.chartData = this.panel.dataPlus;
            } else {
              this.panel.graphOptions = this.panel.options;
              this.panel.chartData = this.panel.data;
            }
            this.render();
          }
        }, {
          key: 'reset',
          value: function reset() {
            this.panel.values.current = 0;
            this.panel.values.sum = 0;
            this.panel.values.next = 0;
            this.panel.values.count = 0;
            this.panel.barOptions.yaxis.min = 0;
            this.panel.barOptions.yaxis.max = 0;
            this.panel.horizontalOptions.xaxis.min = 0;
            this.panel.horizontalOptions.xaxis.max = 0;
            this.panel.options.series.gauges.gauge.min = 0;
            this.panel.options.series.gauges.gauge.max = 0;
            this.panel.data[0].data[0][0] = 0;
            this.panel.data[0].data[0][1] = 0;
            this.panel.pieData[0].data = 0;
            this.panel.pieData[1].data = 0;
            this.panel.dataPlus[0].data = [[0, 0]];
            this.render();
          }
        }, {
          key: 'setRefreshRate',
          value: function setRefreshRate(rate) {

            switch (rate) {
              case '5s':
                this.rRate = 5000;
                break;
              case '10s':
                this.rRate = 10000;
                break;
              case '30s':
                this.rRate = 30000;
                break;
              case '1m':
                this.rRate = 60000;
                break;
              case '5m':
                this.rRate = 300000;
                break;
              case '15m':
                this.rRate = 900000;
                break;
              case '30m':
                this.rRate = 1800000;
                break;
              case '1h':
                this.rRate = 3600000;
                break;
              case '2h':
                this.rRate = 7200000;
                break;
              case '1d':
                this.rRate = 86400000;
                break;
              default:
                this.rRate = 'off';
            }
          }
        }, {
          key: 'setValues',
          value: function setValues() {

            if (this.series.length > 1) {
              var error = {};
              error.message = 'Multiple Series Error';
              error.data = 'Metric query returns ' + this.series.length + ' series. Counter Panel expects a single series.\n\nResponse:\n' + JSON.stringify(this.series);
              throw error;
            }

            if (this.series && this.series.length > 0) {
              var lastPoint = _.last(this.series[0].datapoints);
              var lastValue = _.isArray(lastPoint) ? lastPoint[0] : null;
              var valueFormated = parseInt(_.escape(lastValue));
              if (isNaN(valueFormated)) {
                var error = {};
                error.message = 'Data Undefined Error';
                error.data = 'Metric query returns undefined or not a number.';
                throw error;
              } else {
                if (this.panel.values.sum === 0) {
                  this.panel.values.sum = valueFormated;
                  this.panel.values.current = this.panel.values.sum;
                  this.panel.values.count = this.panel.values.sum;
                  this.panel.barOptions.yaxis.min = 0;
                  this.panel.barOptions.yaxis.max = this.panel.values.current;
                  this.panel.horizontalOptions.xaxis.min = 0;
                  this.panel.horizontalOptions.xaxis.max = this.panel.values.current;

                  this.panel.options.series.gauges.gauge.min = this.panel.values.current;
                  this.panel.options.series.gauges.gauge.max = this.panel.values.current;
                  this.panel.pieData[1].data = this.panel.values.current;
                  this.panel.dataPlus[0].data[0][1] = valueFormated;
                } else {
                  this.panel.values.current = this.panel.values.sum;
                  this.panel.values.sum += valueFormated;
                  this.panel.barOptions.yaxis.min = this.panel.values.current;
                  this.panel.barOptions.yaxis.max = this.panel.values.sum;
                  var array = [];
                  for (var i = 0; i < this.panel.dataPlus[0].data.length; i++) {
                    array.push(this.panel.dataPlus[0].data[i][1]);
                  }
                  this.panel.horizontalOptions.xaxis.min = this.panel.values.current;
                  this.panel.horizontalOptions.xaxis.max = this.panel.values.sum;

                  this.panel.options.series.gauges.gauge.min = this.panel.values.current;
                  this.panel.options.series.gauges.gauge.max = this.panel.values.sum;

                  if (this.panel.dataPlus[0].data.length > 10) {
                    this.panel.dataPlus[0].data = _.drop(this.panel.dataPlus[0].data);
                  }
                  this.count = this.panel.dataPlus[0].data[this.panel.dataPlus[0].data.length - 1][0];
                  this.count++;
                  this.panel.dataPlus[0].data.push([this.count, valueFormated]);
                  this.panel.barPlusOptions.yaxis.max = _.max(array);
                }
                this.panel.values.next = valueFormated;
                this.panel.pieData[1].data = valueFormated;
                this.panel.pieData[0].data = 0;
              }
            }
            //sets delta to represent how many times counter refreshes to adjust speed based on query
            //refresh below 50 will not refresh accurately, if below 50, increment the counter by a larger
            //number than one, depending on refresh rate of data by user and next incoming value
            if (this.rRate / this.panel.values.next < 50) {
              this.delta = 50;
              this.increment = Math.ceil(this.panel.values.next / (this.rRate / 55));
            } else {
              this.delta = Math.floor(this.rRate / this.panel.values.next) - Math.ceil(this.rRate / this.panel.values.next / 100) * 3;
              this.increment = 1;
            }
          }
        }, {
          key: 'link',
          value: function link(scope, elem) {
            var _this3 = this;

            this.updateCounter(elem);

            this.events.on('render', function () {

              var $panelContainer = elem.find('.panel-container');
              var $placeHolder = elem.find('#placeholder');

              if (_this3.panel.graphChoice === 'hbar') {
                _this3.panel.graphHeight = _this3.height === 0 ? 300 : _this3.height / 2;
              } else {
                _this3.panel.graphHeight = _this3.height === 0 ? 300 : _this3.height;
              }
              if ($placeHolder) {
                $placeHolder.css('width', '80%');
              }

              if (_this3.panel.bgColor) {
                $panelContainer.css('background-color', _this3.panel.bgColor);
              } else {
                $panelContainer.css('background-color', '');
              }
            });
          }
        }]);

        return CounterCtrl;
      }(MetricsPanelCtrl));

      _export('CounterCtrl', CounterCtrl);

      CounterCtrl.templateUrl = 'module.html';
    }
  };
});
//# sourceMappingURL=counter_ctrl.js.map
