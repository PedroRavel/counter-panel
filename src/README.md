# **Grafana Counter Panel**
## Single Stat Counter Plugin for Grafana
Single stat plugin that behaves as a counter. Calculates incoming single stat and compares
it to previous stat. Counter will rise from current stat to sum of current stat and
incoming stat, sum of current stat and incoming stat will become current stat. Speed of counter depends on new incoming stat and refresh interval i.e large incoming stat with a fast refresh rate will make the counter rise faster where as low stat with a refresh rate every 5 minutes will make the counter rise slow. Counter will be accompanied by gauge that will fill up based on refresh rate.

## Features

- Choose between Bar, Horizontal Bar, Gauge, Pie Chart, and Bar Plus to represent time and Speed
of next single stat query.
- Change color of gauge.
- Reset values to start the sum over.
- ### Bar Plus
  - Turn Single Stat into accumulating bar graph.
  - Each incoming stat will represent a bar on the graph and will automatically be appended upon query.
  - Compare older single stat queries to newer ones.
