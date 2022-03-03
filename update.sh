git rm -rf docs/
cp -R ../sympy/doc/_build/html docs/
touch docs/.nojekyll
git add docs/
git commit -m "Update the latest Furo theme"
git push
