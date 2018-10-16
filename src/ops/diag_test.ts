/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
import * as tf from '../index';
import {describeWithFlags} from '../jasmine_util';
import {ALL_ENVS, expectArraysEqual} from '../test_util';

describeWithFlags('diag', ALL_ENVS, () => {
  it('1d', () => {
    const m = tf.tensor1d([5]);
    const diag = tf.diag(m);
    expectArraysEqual(diag.shape, [1, 1]);
    expectArraysEqual(diag, tf.tensor2d([5], [1, 1]));
  });
  it('2d', () => {
    const m = tf.tensor2d([8, 1], [1, 2]);
    const diag = tf.diag(m);
    expectArraysEqual(diag.shape, [1, 2, 1, 2]);
    expectArraysEqual(diag, tf.tensor4d([8, 0, 0, 1], [1, 2, 1, 2]));
  });
});