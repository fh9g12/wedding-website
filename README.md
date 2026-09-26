Source code for our wedding website 👫, built with [Jekyll](https://jekyllrb.com/) and the [Alembic](https://github.com/daviddarnes/alembic) theme.

Each page (Schedule, Venue, Accommodation, FAQ, RSVP, Gallery) is a plain markdown file in the repo root - edit those directly to change content.

To change the wedding date/time or countdown timezone, edit the `wedding:` section in `_config.yml`.

## Running locally

```
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000 in your browser. Pushing to `main` builds and deploys the site via the GitHub Actions workflow in `.github/workflows/jekyll.yml`.
