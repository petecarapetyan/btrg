import { rocketLaunch } from '@rocket/launch';
import { rocketBlog } from '@rocket/blog';
import { rocketSearch } from '@rocket/search';

export default /** @type {Partial<import('@rocket/cli').RocketCliOptions>} */ ({
  presets: [rocketLaunch(), rocketBlog(), rocketSearch()],
});