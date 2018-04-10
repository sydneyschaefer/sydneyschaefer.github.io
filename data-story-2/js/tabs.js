function openBracket(cityName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(cityName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

    // Show the specific tab content
    document.getElementById(defaultOpen2).style.display = "block";


            Highcharts.setOptions({
  colors: ['#002664', '#E57200', '#003366', '#ffc82d', '#4B9CD3', '#18453b', '#a90b25', '#9EA2A2', '#ffcb05', '#000000']
});

Highcharts.chart('container2', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Top 10 teams predicted to win NCAA Championship'
  },

  credits: {
    enabled: true,
    text: 'Sydney Schaefer'
  },

  tooltip: {
    pointFormat: '<span style="font-size: .9em;">{point.y}</span>',
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.y}%',
        style: {
          color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
        }
      }
    }
  },
  series: [{
    name: 'Teams',
    colorByPoint: true,
    data: [{
      name: 'Villanova',
      y: 17.5,
    }, {
      name: 'Virginia',
      y: 16.46,
    }, {
      name: 'Duke',
      y: 10.96,
    }, {
      name: 'Kansas',
      y: 9.56,
    }, {
      name: 'North Carolina',
      y: 8.36,
    }, {
      name: 'Michigan State',
      y: 7.74,
    }, {
      name: 'Arizona',
      y: 4.92,
    }, {
      name: 'Xavier',
      y: 4.18,
    }, {
      name: 'Michigan',
      y: 3.5,
    }, {
      name: 'Purdue',
      y: 2.59,
    }]
  }]
});
