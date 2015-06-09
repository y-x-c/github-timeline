import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr("stirng"),
  actor_login: DS.attr("string"),
  action: DS.attr("string"),
  actor_url: DS.attr("string"),
  actor_avatar_url: DS.attr("string"),
  repo_name: DS.attr("string"),
  repo_url: DS.attr("string"),
  created_at: DS.attr("date")
});
