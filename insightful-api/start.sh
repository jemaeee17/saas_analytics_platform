#!/bin/sh

echo "Running Laravel setup..."

php artisan config:clear
php artisan cache:clear
php artisan migrate --force
php artisan db:seed --force

echo "Starting Apache..."

exec apache2-foreground