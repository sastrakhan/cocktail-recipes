from django_filters.rest_framework import BaseInFilter, FilterSet, NumberFilter

from .models import Drinks


class NumberInFilter(BaseInFilter, NumberFilter):
    pass


class CategoryFilter(FilterSet):
    category = NumberInFilter(field_name='category_link', lookup_expr='in')

    class Meta:
        model = Drinks
        fields = ['category_link']
