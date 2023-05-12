/*
  KULeuven/LIBIS (c) 2022
  Mehmet Celik mehmet(dot)celik(at)kuleuven(dot)be
*/
import './primo';
import './sass/style.scss';
import Loader from './loader';
import './modules/pubSubInterceptor';

// See documentation for usage info https://www.npmjs.com/package/primo-explore-hathitrust-availability
import 'primo-explore-hathitrust-availability';


(function(){
  let customType = 'centralCustom';
  let moduleList = ['ng', 'oc.lazyLoad', 'angularLoad', 'ngMaterial', 'pubSubInterceptor', 'hathiTrustAvailability'];
                    
  let app = angular.module(customType, moduleList);

  //Load components
  new Loader().load(customType);
  console.log(`Done initializing ${customType}`);
})();