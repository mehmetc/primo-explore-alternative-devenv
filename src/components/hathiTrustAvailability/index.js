/*
  KULeuven/LIBIS (c) 2022
  Mehmet Celik mehmet(dot)celik(at)kuleuven(dot)be
*/

// See documentation for usage info https://www.npmjs.com/package/primo-explore-hathitrust-availability
// DISABLED by default. "enabled: false"
export let HathiTrustComponent = {
    name: 'hathi-trust',
    config: {
        template: '<hathi-trust-availability hide-online="true" msg="WOW, HathiTrust! Lucky you!"></hathi-trust-availability>'
    },
    enabled: false,
    appendTo: 'prm-search-result-availability-line-after',
    enableInView: '.*'
} 