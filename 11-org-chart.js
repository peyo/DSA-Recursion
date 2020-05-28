const orgChart = [
  {
    0: {
      name: "Zuckerberg",
      children: {
        0: {
          name: "Schroepfer",
          children: {
            0: {
              name: "Bosworth",
              children: {
                0: {
                  name: "Steve",
                },
                1: {
                  name: "Kyle",
                },
                2: {
                  name: "Andra",
                },
              },
            },
            1: {
              name: "Zhao",
              children: {
                0: {
                  name: "Richie",
                },
                1: {
                  name: "Sofia",
                },
                2: {
                  name: "Jen",
                },
              },
            },
          },
        },
        1: {
          name: "Schrage",
          children: {
            0: {
              name: "VanDyck",
              children: {
                0: {
                  name: "Sabrina",
                },
                1: {
                  name: "Michelle",
                },
                2: {
                  name: "Josh",
                },
              },
            },
            1: {
              name: "Swain",
              children: {
                0: {
                  name: "Blanch",
                },
                1: {
                  name: "Tom",
                },
                2: {
                  name: "Joe",
                },
              },
            },
          },
        },
        2: {
          name: "Sandberg",
          children: {
            0: {
              name: "Goler",
              children: {
                0: {
                  name: "Eddie",
                },
                1: {
                  name: "Julie",
                },
                2: {
                  name: "Annie",
                },
              },
            },
            1: {
              name: "Hernandez",
              children: {
                0: {
                  name: "Rowi",
                },
                1: {
                  name: "Inga",
                },
                2: {
                  name: "Morgan",
                },
              },
            },
            2: {
              name: "Moissinac",
              children: {
                0: {
                  name: "Amy",
                },
                1: {
                  name: "Chuck",
                },
                2: {
                  name: "Vinni",
                },
              },
            },
            3: {
              name: "Kelley",
              children: {
                0: {
                  name: "Eric",
                },
                1: {
                  name: "Ana",
                },
                2: {
                  name: "Wes",
                },
              },
            },
          },
        },
      },
    },
  },
];

const displayOrgChart = (orgChart) => {

  let results = [];

  // General case
  for (let member in orgChart) {                          //{1} "member" equals all objects in orgChart.
    if (typeof orgChart[member] === "object") {           //{2} If the values in orgChart are objects,
      let subKeys = displayOrgChart(orgChart[member]);    //{3} send the objects through the displayOrgChart function again as subKeys.
      results = results.concat(subKeys.map(subKey => {    //{4} Map through all the subKeys and add "  " to the beginning and add them to the array results.
        return "  " + subKey;
      }))
    } else {
      results.push(orgChart[member]);                     //{5} If "member" is not an object, push it to results. This will not add spaces to the beginning of them.
    }
  }

  // Base case
  return results;
};

console.log(displayOrgChart(orgChart));