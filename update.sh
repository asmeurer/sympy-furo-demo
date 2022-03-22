git rm -rf docs/dev/
cp -R ../sympy/doc/_build/html docs/dev/
touch docs/.nojekyll
git add docs/
git commit -m "Update the latest Furo theme"
git push
