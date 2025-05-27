# PowerShell script to deploy dist/ to the root of gh-pages branch
# Usage: Run this script from the project root after building your site

# Ensure you are on the correct branch
git checkout gh-pages

# Remove all files except .git and dist/
Get-ChildItem -Path . -Exclude '.git', 'dist' | Remove-Item -Recurse -Force

# Copy contents of dist/ to root
Copy-Item -Path dist\* -Destination . -Recurse -Force

# Remove the now-empty dist directory
Remove-Item -Path dist -Recurse -Force

# Stage all changes
git add .

# Commit the deployment
$commitMsg = "deploy: publish latest build to gh-pages root ($(Get-Date -Format 'yyyy-MM-dd HH:mm:ss'))"
git commit -m $commitMsg

# Push to gh-pages branch
git push origin gh-pages

Write-Host "Deployment to gh-pages branch complete."
