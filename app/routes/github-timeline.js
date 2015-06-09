import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    this.store.push('timeline-item', {
      id: 2872305682,
      type: 'WatchEvent',
      actor_login: 'Orthocenter',
      actor_url: 'https://api.github.com/users/Orthocenter',
      actor_avatar_url: '/1.jpeg',
      action: 'started',
      repo_name: 'dmarcotte/idea-handlebars',
      created_at: '2015-06-07T04:57:44Z'
    });

    this.store.push('timeline-item', {
      id: 287230563,
      type: 'WatchEvent',
      actor_login: 'Orthocenterrrrrrr',
      actor_url: 'https://api.github.com/users/Orthocenter',
      actor_avatar_url: '/1.jpeg'
    });

    return this.store.all('timeline-item');
  }
});
