import React from 'react';
import {render} from 'react-dom';
import MetricTester from './components/MetricTester.jsx';
import MRATester from './components/MRATester.jsx';

import canberra from 'talisman/metrics/distance/canberra';
import chebyshev from 'talisman/metrics/distance/chebyshev';
import cosine from 'talisman/metrics/distance/cosine';
import damerauLevenshtein from 'talisman/metrics/distance/damerau-levenshtein';
import dice from 'talisman/metrics/distance/dice';
import euclidean, {squared} from 'talisman/metrics/distance/euclidean';
import hamming from 'talisman/metrics/distance/hamming';
import jaccard from 'talisman/metrics/distance/jaccard';
import jaro from 'talisman/metrics/distance/jaro';
import jaroWinkler from 'talisman/metrics/distance/jaro-winkler';
import levenshtein from 'talisman/metrics/distance/levenshtein';
import manhattan from 'talisman/metrics/distance/manhattan';
import mra from 'talisman/metrics/distance/mra';
import overlap from 'talisman/metrics/distance/overlap';
import sorensen from 'talisman/metrics/distance/sorensen';
import tversky from 'talisman/metrics/distance/tversky';

render(<MetricTester metric={canberra} enforceNumbers={true} sameDimension={true} />, document.getElementById('canberra-mount'));
render(<MetricTester metric={cosine} enforceNumbers={true} sameDimension={true} />, document.getElementById('cosine-mount'));
render(<MetricTester metric={chebyshev} enforceNumbers={true} sameDimension={true} />, document.getElementById('chebyshev-mount'));
render(<MetricTester metric={damerauLevenshtein} integerResult={true} />, document.getElementById('damerau-levenshtein-mount'));
render(<MetricTester metric={dice} />, document.getElementById('dice-mount'));
render(<MetricTester metric={euclidean} enforceNumbers={true} sameDimension={true} />, document.getElementById('euclidean-mount'));
render(<MetricTester metric={squared} enforceNumbers={true} sameDimension={true} />, document.getElementById('euclidean-squared-mount'));
render(<MetricTester metric={hamming} integerResult={true} sameDimension={true} />, document.getElementById('hamming-mount'));
render(<MetricTester metric={jaccard} />, document.getElementById('jaccard-mount'));
render(<MetricTester metric={jaro} />, document.getElementById('jaro-mount'));
render(<MetricTester metric={jaroWinkler} />, document.getElementById('jaro-winkler-mount'));
render(<MetricTester metric={levenshtein} integerResult={true} />, document.getElementById('levenshtein-mount'));
render(<MetricTester metric={manhattan} enforceNumbers={true} sameDimension={true} />, document.getElementById('manhattan-mount'));
render(<MRATester metric={mra} />, document.getElementById('mra-mount'));
render(<MetricTester metric={overlap} />, document.getElementById('overlap-mount'));

// TODO: custom Jaro-Winkler
// TODO: Tversky
// TODO: Minkowski