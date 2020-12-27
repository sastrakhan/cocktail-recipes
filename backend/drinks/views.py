import django_filters
from rest_framework import filters, viewsets
from .serializers import CategorySerializer, DrinksSerializer
from .models import Category, Drinks


class DrinksView(viewsets.ModelViewSet):
    serializer_class = DrinksSerializer
    queryset = Drinks.objects.all()
    filter_backends = [
        django_filters.rest_framework.DjangoFilterBackend,
        filters.OrderingFilter,
        filters.SearchFilter,
    ]
    filterset_fields = ['strCategory']
    ordering_fields = '__all__'
    ordering = ['strDrink']
    search_fields = ['strDrink', 'strIngredient1']


class CategoryView(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()
