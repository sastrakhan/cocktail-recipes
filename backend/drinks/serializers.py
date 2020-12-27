from rest_framework import serializers

from drinks.models import Category, Drinks


class DrinksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Drinks
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
